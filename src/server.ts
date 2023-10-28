import bodyParser from "body-parser";
import express from "express";
let multer = require("multer");
let upload = multer();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload.array());
app.listen(3000, () => {
    console.log("listening");
  });
  
export default app;
