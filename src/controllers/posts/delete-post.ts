import { Request, Response } from "express";
import { collection } from "../../database/connection";
import { ObjectId } from "mongodb";
import handle from "../../core/request-class";
import verifyToken from "../../validation/users/compare-token";

export default async function deletePost(req: Request, res: Response,next:any) {
 
  const posts = collection("posts");
  const requestHandler = handle(req);
  const postId = requestHandler.input("id");
  const deleted = await posts.deleteOne({
    _id: new ObjectId(postId),
  });
  res.status(200).send({ deleted });
}
