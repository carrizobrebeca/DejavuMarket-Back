const { Router } = require("express");
const {
  postUsersHandler,
  getUsersHandler,
} = require("../Handlers/usersHandler");

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);

usersRouter.post("/", postUsersHandler);

module.exports = usersRouter;
