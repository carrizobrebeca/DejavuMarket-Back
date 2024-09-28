const { Router } = require("express");
const {
  postUsersHandler,
  getUsersHandler,
} = require("../Handlers/UsersHandler");

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);

usersRouter.post("/", postUsersHandler);

module.exports = usersRouter;
