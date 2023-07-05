import express from "express";
import { getAllUsers, getUserById, postUsers, deleteUsers, updateUser } from "../controller/users.controller.js";

const route = express.Router()

route.get("/users", getAllUsers)
route.get("/users/:id", getUserById)
route.post("/users", postUsers)
route.delete("/users/:id", deleteUsers)
route.put("/users/:id", updateUser)

export default route