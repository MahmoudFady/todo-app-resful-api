const jwtUtil = require("../utils/jwtUtil");
module.exports = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const user = jwtUtil.verify(token);
    req["user"] = user;
    next();
  } catch (err) {
    err = new Error(err.message);
    err.status = 401;
    next(err);
  }
};
