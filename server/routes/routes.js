import express from "express";
import { AddUser, getUsers } from "../controller/User_Conreoller.js";
import { newConversaction } from "../controller/conversaction_controller.js";

export const Routes = express.Router();

Routes.post("/add", AddUser);
Routes.get("/users", getUsers);
Routes.post("conversaction/add", newConversaction);
