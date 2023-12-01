import { json } from "body-parser";
import path from "path";
import { port } from "./config";
import express from "express";

const app = express();
const multer = require("multer");
let upload = multer();
const myPath = path.join(process.cwd() + "/storage/uploads");

app.use(express.json());
app.use("/uploads", express.static(myPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded());
//app.use(upload.single('image'))
app.use(upload.array());
app.listen(port, () => {
  console.log("listening");
});

export default app;
