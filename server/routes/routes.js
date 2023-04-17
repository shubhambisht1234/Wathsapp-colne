import express from "express";
import { AddUser, getUsers } from "../controller/User_Conreoller.js";

export const Routes = express.Router();

Routes.post("/add", AddUser);
Routes.get("/users", getUsers);
