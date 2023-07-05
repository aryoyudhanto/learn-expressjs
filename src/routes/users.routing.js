import express from "express";
import { getAllUsers, getUserById, postUsers, deleteUsers, updateUser } from "../controller/users.controller.js";
import { tokenVerify } from "../middleware/Auth.middleware.js";

const route = express.Router()

route.get("/users", tokenVerify, getAllUsers)
route.get("/users/:id", tokenVerify, getUserById)
route.post("/users", tokenVerify, postUsers)
route.delete("/users/:id", tokenVerify, deleteUsers)
route.put("/users/:id", tokenVerify, updateUser)

export default route