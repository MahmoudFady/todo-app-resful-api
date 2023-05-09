module.exports = (req, res, next) => {
  const err = new Error("not found endpoint");
  err.status = 404;
  next(err);
};
