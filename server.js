require("dotenv").config();
const PORT = process.env.PORT || 8080;
const MONGO_DB_URI =
  process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017/todo-db";
const http = require("http");
const mongoose = require("mongoose");
const app = require("./src/app");
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("db connection sucess");
    http.createServer(app).listen(PORT, () => {
      console.log("server  running on port ", PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
