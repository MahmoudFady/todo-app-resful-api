const mongoose = require("mongoose");
const passwordUtil = require("../utils/passswordUtil");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", async function (next) {
  if (this.isNew) this.password = await passwordUtil.encrypt(this.password);
  next();
});
module.exports = mongoose.model("User", userSchema);
