import express from "express";
import { Connection } from "./database/db.js";
import { Routes } from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const PORT = 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", Routes);
Connection();
app.listen(PORT, () => {
  console.log(`Your port-8000 ready for run....`);
});
