import express from "express";
import { AddUser } from "../controller/User_Conreoller.js";

export const Routes = express.Router();

Routes.post("/add", AddUser);
