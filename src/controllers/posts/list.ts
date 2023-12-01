import { collection } from "../../database/connection";
import { Request, Response } from "express";

const listPosts = async (request: Request, reply: Response) => {
  const posts = collection("posts");
  const data = await posts.find({}).toArray();
  reply.status(200).send({ posts: data });
};
export default listPosts;
