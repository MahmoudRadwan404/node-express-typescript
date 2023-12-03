import { Request, Response, Express } from "express";
import { collection } from "../../database/connection";
import verifyToken from "../../validation/users/compare-token";

const getAllUsers = async (request: Request, reply: Response) => {
<<<<<<< HEAD
  await verifyToken(request, reply);
=======
  await verifyToken(request,reply);
>>>>>>> 39400158d8df137128b43650c7434a33a1e2dcd5
  const users = collection("users");
  const data: any = await users.find({}).toArray();
  reply.status(200).send(data);
};
export default getAllUsers;
