const express = require("express");
const router = express.Router();
const validator = require("../middlewares/validation/todoValidator");
const validationResult = require("../middlewares/validation/check-validation-result");
const todoController = require("../controllers/todoController");
const checkAuth = require("../middlewares/check-auth");
const checkValidationResult = require("../middlewares/validation/check-validation-result");
router
  .route("/todo")
  .post(
    checkAuth,
    validator.insertOne,
    validationResult,
    todoController.createOne
  );
router
  .route("/todo/:id")
  .all(checkAuth)
  .get(validator.isMongoId, checkValidationResult, todoController.getOne)
  .patch(validator.updateOne, checkValidationResult, todoController.updateOne)
  .delete(validator.isMongoId, checkValidationResult, todoController.deleteOne);

module.exports = router;
