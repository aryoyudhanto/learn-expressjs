import express from "express";
import { getAllUsers, getUserById, postUsers, deleteUsers } from "../controller/users.controller.js";

const route = express.Router()

route.get("/users", getAllUsers)
route.get("/users/:id", getUserById)
route.post("/users", postUsers)
route.delete("/users/:id", deleteUsers)

export default route