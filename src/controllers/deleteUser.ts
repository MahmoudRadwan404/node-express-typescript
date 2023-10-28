import { putJsonFile } from "@mongez/fs";
import { src } from "../utils";
let users = require("../database/users.json");

const deleteUser = (req: any, res: any) => {
  const id = +req.params.id;
  let deletedUser = users.find((user: any) => user.id === id);
  const index = users.indexOf(deletedUser);
  users.splice(index, 1);
  console.log(__dirname);
  let userFilePath = src("database/users.json");
  putJsonFile(userFilePath, users);
  res.send("deleted");
};
export default deleteUser;
