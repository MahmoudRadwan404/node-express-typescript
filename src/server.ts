import { json } from "body-parser";
import path from "path";
import { port } from "./config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
//const fileUpload = require("express-fileupload");
import { options } from "./core/options-cors";
const app = express();
app.use(cors({
  origin:'*'
}));
app.use(fileUpload());
const myPath = path.join(process.cwd() + "/storage/uploads");

app.use(bodyParser.json());
app.use(express.json())
app.use("/uploads", express.static(myPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded());

app.listen(3000, () => {
  console.log("listening");
  console.log(myPath);
});

export default app;
