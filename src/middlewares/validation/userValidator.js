const { body } = require("express-validator");
module.exports.signin = [
  body("email")
    .exists()
    .withMessage("email is required")
    .notEmpty()
    .withMessage("email can't be empty")
    .isEmail()
    .withMessage("invalid email"),
  body("password")
    .exists()
    .withMessage("password is required")
    .notEmpty()
    .withMessage("password can't be empty"),
];
module.exports.signup = [
  body("name")
    .exists()
    .withMessage("name is required")
    .notEmpty()
    .withMessage("name can't be empty"),
  body("email")
    .exists()
    .withMessage("email is required")
    .notEmpty()
    .withMessage("email can't be empty")
    .isEmail()
    .withMessage("invalid email"),
  body("password")
    .exists()
    .withMessage("password is required")
    .notEmpty()
    .withMessage("password can't be empty"),
];
