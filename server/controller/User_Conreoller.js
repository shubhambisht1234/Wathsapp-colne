import { User } from "../model/User.js";
export const AddUser = async (req, res) => {
  try {
    const exist = await User.findOne({ sub: req?.body?.sub });
    if (exist) {
      res.status(200).json({ msg: "user Already exist" });
      return;
    }
    const newUser = new User(req.body);
    // console.log(newUser.body, "User,,,,");
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (err) {
    console.log(`somthing went wrong ${err}`);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users, "usersusersusersusers");
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};
