import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import { Request, Response, Express } from "express";
import handle from "../../core/request-class";

const deleteUser = async (req: Request, res: Response) => {
  const users = collection("users");
  const requestHandler = handle(req);
  const id = requestHandler.input("id");
  const postId = requestHandler.input("id");
  const deleted = await users.deleteOne({ _id: new ObjectId(id) });
  res.send(deleted);
};
export default deleteUser;
