import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import handle from "../../core/request-class";
import wrong from "./error";
import { Request, Response } from "express";

const getSinglePost = async (request: Request, reply: Response) => {
  const requestHandler = handle(request);
  const postId = requestHandler.input("id");
  const posts = collection("posts");
  try {
    const singlePost = await posts
      .find({ _id: new ObjectId(postId) })
      .toArray();

    if (!singlePost) {
      return reply.status(404).send({
        error: wrong.post,
      });
    }

    reply.status(200).send({
      post: singlePost,
    });
  } catch (err) {
    reply.status(404).send({ err: wrong.id });
  }
};

export default getSinglePost;
