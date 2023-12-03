import { Request, Response, Express } from "express";
import { collection } from "../../database/connection";
import verifyToken from "../../validation/users/compare-token";

const getAllUsers = async (request: Request, reply: Response) => {


  const users = collection("users");
  const data: any = await users.find({}).toArray();
  reply.status(200).send(data);
};
export default getAllUsers;
