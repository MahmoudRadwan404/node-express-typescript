import { json } from "body-parser";
import path from "path";
import { port } from "./config";
import express from "express";
import bodyParser from "body-parser";
const app = express();
const fileUpload=require('express-fileupload')
app.use(fileUpload())
//const multer = require("multer");
/*const diskStorage=multer.diskStorage({
  distination:function(req:any,file:any,cb:any):any{
    console.log(file)
    cb(null,'../storage/uploads')
  }
})*/
//let upload = multer();
const myPath = path.join(process.cwd() + "/storage/uploads");
app.use(bodyParser.json());
app.use(express.json());
app.use("/uploads", express.static(myPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded());
//app.use(upload.single('image'))
//app.use(upload.array());
app.listen(port, () => {
  console.log("listening");
  console.log(myPath);
});

export default app;
