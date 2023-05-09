const TodoModel = require("../models/todoModel");
module.exports.createOne = async (req, res, next) => {
  try {
    const userId = req["user"].id;
    const { title, description } = req.body;
    const newTodo = await new TodoModel({
      user: userId,
      title,
      description,
    }).save();
    res.status(200).json({ message: "todo added", newTodo });
  } catch (err) {
    next(err);
  }
};
module.exports.updateOne = async (req, res, next) => {
  try {
    const id = req.params["id"];
    const userId = req["user"].id;
    const todo = await TodoModel.findOneAndUpdate(
      { _id: id, user: userId },
      req.body,
      { new: true }
    );
    if (!todo) throw new Error("something go wrong , todo doesn't exist");
    res.status(200).json({
      message: "todo updated",
    });
  } catch (err) {
    next(err);
  }
};
module.exports.getOne = async (req, res, next) => {
  try {
    const id = req.params["id"];
    const userId = req["user"].id;
    const todo = await TodoModel.findOne({ _id: id, user: userId });
    if (!todo) throw new Error("something go wrong , todo doesn't exist");
    res.status(200).json({
      message: "get todo by id",
      todo,
    });
  } catch (err) {
    next(err);
  }
};
module.exports.deleteOne = async (req, res, next) => {
  try {
    const id = req.params["id"];
    const userId = req["user"].id;
    const todo = await TodoModel.findOneAndDelete({ _id: id, user: userId });
    if (!todo) throw new Error("something go wrong , todo doesn't exist");
    res.status(200).json({
      message: "todo deleted",
    });
  } catch (err) {
    next(err);
  }
};
