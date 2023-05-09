const express = require("express");
const router = express.Router();
const validator = require("../middlewares/validation/userValidator");
const validationResult = require("../middlewares/validation/check-validation-result");
const { signin, signup, getAllTodo } = require("../controllers/userController");
router.post("/user/signup", validator.signup, validationResult, signup);
router.post("/user/signin", validator.signin, validationResult, signin);
router.get("/user/:id/todo", validator.isMongoId, validationResult, getAllTodo);

module.exports = router;
