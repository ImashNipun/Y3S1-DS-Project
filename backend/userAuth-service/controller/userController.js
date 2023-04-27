const { User, validate } = require("../models/user");
// const express = require("express");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
require("dotenv").config();
// const cookieParser = require('cookie-parser')
// const app = express();
// app.use(cookieParser());

const createUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    // const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = req.body.password;

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const authenticateUser = async (req, res) => {
  try {
    const { error } = validateAuth(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    if ( req.body.password != user.password)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: user.email,
          roles: user.type,
        },
      },
      "eL6Jadh6jBThpztk",
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign({ username: user.email }, "gApYVNX8Z9iCm7Jt", {
      expiresIn: "7d",
    });

      res.cookie('jwt', refreshToken, {
        httpOnly: true, //accessible only by web server
        // secure: true, //https
        // sameSite: 'None', //cross-site cookie
       // maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
    });
    // Send accessToken containing username and roles
    // res.json({ accessToken });

    res.status(200).send({
      data: user,
      accesstoken: accessToken,
      message: "Login is successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
};

const refresh = (req, res) => {
  // const cookies = req.headers.cookie.trim().split('=');
  // // console.log(req.rawHeaders.Cookie);
  // console.log(req.headers.cookie);
  // // console.log(req);

  let cookies = {};

    const cookiesArray = req.headers.cookie.split(';');

    cookiesArray.forEach((cookie) => {
        const [key, value] = cookie.trim().split('=');
        cookies[key] = value;
    });

    // console.log(cookies.jwt);

  if (!cookies?.jwt)
    return res.status(401).json({ message: "Unauthorized 101" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    "gApYVNX8Z9iCm7Jt",
    async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const foundUser = await User.findOne({ email: decoded.username }).exec();

      if (!foundUser)
        return res.status(401).json({ message: "Unauthorized user" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.email,
            roles: foundUser.type,
          },
        },
        "eL6Jadh6jBThpztk",
        { expiresIn: "15m" }
      );
        console.log(accessToken);
      res.json({ accessToken });
    }
  );
};

const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};

const validateAuth = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = {
  createUser,
  authenticateUser,
  refresh,
  logout,
};
