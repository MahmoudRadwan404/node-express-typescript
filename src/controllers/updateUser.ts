//import users from "../database/users.json";
let users = require("../database/users.json");
import { putJsonFile } from "@mongez/fs";
import {src} from '../utils'

const updateUser = (req: any, res: any) => {
  const id = +req.params.id;
  let userUpdate: any = users.find((user: any) => user.id === id);
  let index = users.indexOf(userUpdate);
  userUpdate = { ...userUpdate, ...req.body };
  users[index] = userUpdate;
  let userFilePath = src("database/users.json");
  putJsonFile(userFilePath, users);
  res.send("updated");
};

export default updateUser;
