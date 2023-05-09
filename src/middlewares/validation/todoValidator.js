const { body, param } = require("express-validator");
module.exports.isMongoId = [
  param("id").isMongoId().withMessage("invalid todo id"),
];
module.exports.insertOne = [
  body("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be string"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be string"),
];
module.exports.updateOne = [
  ...this.isMongoId,
  body("title")
    .optional()
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be string"),
  body("description")
    .optional()
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be string"),
  body("completed")
    .optional()
    .notEmpty()
    .withMessage("completed is required")
    .isBoolean()
    .withMessage("completed must be boolean value "),
];
