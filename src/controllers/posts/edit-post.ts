import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import handle from "../../core/request-class";
import verifyToken from "../../validation/users/compare-token";

const updatePost = async (req: Request, res: Response) => {

  const requestHandler = handle(req);
  const postId = requestHandler.input("id");
  const post = requestHandler.input("post");
  const posts = collection("posts");
  try {
    let newPost = await posts.updateOne(
      { _id: new ObjectId(postId) },
      { $set: { post } }
    );
    res.status(200).send({ newPost });
  } catch (err) {
    res.status(404).send({ err });
  }
};

export default updatePost;
