import { json } from "body-parser";
import { Request, Response } from "express";
import { body } from "express-validator";
//testing file for old errors
export default function addUserValidation(req: any, res: Response) {
  const name = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  if (!name || !email || !password) {
    return res.send("Please enter your name and email and password");
  } else {
    req["age"] = "20";
    res.send(req.age);
  }
}
