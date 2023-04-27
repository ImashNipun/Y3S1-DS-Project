const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


const userRouter = require("./routes/userRouter");

// const issue2options = {
//   origin: true,
//   methods: ["POST"],
//   credentials: true,
//   maxAge: 3600
// };


//middleware
dotenv.config();
const app = express();
app.use(express.json());
// app.use(cors(
//   issue2options
// ));






//routes
app.use("/",userRouter);


const PORT = process.env.PORT || 5005;

mongoose.connect(process.env.MONGODB_DEMO, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connected successfully");
});
app.listen(PORT, () => {
  console.log(`Server is up an running on port: ${PORT}`);
});
