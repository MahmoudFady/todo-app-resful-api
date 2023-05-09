const UserModel = require("../models/userModel");
const passwordUtil = require("../utils/passswordUtil");
const jwtUtil = require("../utils/jwtUtil");

module.exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("wrong email or password");
    const isPassMatched = await passwordUtil.isMatched(password, user.password);
    if (!isPassMatched) throw new Error("wrong email or password");
    const token = jwtUtil.create({ id: user._id });
    res.status(200).json({ message: "auth sucess", user, token });
  } catch (err) {
    next(err);
  }
};
module.exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const isUserExist = await UserModel.findOne({ email });
    if (isUserExist) throw new Error("user already exist");
    const newUser = await new UserModel({ name, email, password }).save();
    const token = jwtUtil.create({ id: newUser._id });
    res
      .status(200)
      .json({ message: "signup success", userId: newUser._id, token });
  } catch (err) {
    next(err);
  }
};
