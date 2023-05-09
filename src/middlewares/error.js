module.exports = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ errMsg: err.message || "internal server error" });
};
