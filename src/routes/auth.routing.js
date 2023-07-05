import express from "express";
import { loginAuth } from "../controller/auth.controller.js";

const route = express.Router()

route.post("/login", loginAuth)

export default route