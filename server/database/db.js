import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const User = process.env.DB_USERNAME;
const Password = process.env.DB_PASSWORD;
// console.log(User);
const URL = `mongodb+srv://${User}:${Password}@clone-wathsapp.bwk4nh5.mongodb.net/test`;
export const Connection = () => {
  try {
    mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("data base connected sucessfully");
  } catch (error) {
    console.log("Data Base not Connected");
  }
};
