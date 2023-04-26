const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
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

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

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

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
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

    const refreshToken = jwt.sign({ username: user.name }, "gApYVNX8Z9iCm7Jt", {
      expiresIn: "7d",
    });

    // console.log(refreshToken);

    // Create secure cookie with refresh token
    // res.header("Access-Control-Allow-Headers", "*");
    // res.header("Access-Control-Allow-Credentials", true);
    // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    // res.cookie("my cookie", "this is a demo cokkie", { httpOnly: false });
    res.cookie("jwt", refreshToken);
  //   res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
  //     maxAge: 5000,
  //     // expires works the same as the maxAge
  //     expires: new Date('01 12 2021'),
  //     secure: true,
  //     httpOnly: true,
  //     sameSite: 'lax'
  // });
  // res.send('Cookie have been saved successfully');

//   res.cookie('jwt', refreshToken, {
//     httpOnly: true, //accessible only by web server 
//     secure: true, //https
//     sameSite: 'None', //cross-site cookie 
//     maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
// })

    // Send accessToken containing username and roles
    // res.json({ accessToken });

    res
      .status(200)
      .send({
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
  const cookies = req.cookies;
  console.log(req.cookies);
  // console.log(req);

  if (!cookies?.jwt)
    return res.status(401).json({ message: "Unauthorized 101" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const foundUser = await User.findOne({ email: decoded.username }).exec();

      if (!foundUser)
        return res.status(401).json({ message: "Unauthorized user" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.user,
            roles: foundUser.type,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      res.json({ accessToken });
    })
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
