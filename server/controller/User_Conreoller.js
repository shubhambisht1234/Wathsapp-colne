import { User } from "../model/User.js";
export const AddUser = async (req, res) => {
  try {
    const exist = await User.findOne({ sub: req?.body?.sub });
    if (exist) {
      res.status(200).json({ msg: "user Already exist" });
      return;
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (err) {
    console.log(`somthing went wrong ${err}`);
  }
};
