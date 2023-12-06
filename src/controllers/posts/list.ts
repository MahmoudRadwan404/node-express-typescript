import { collection } from "../../database/connection";
import { Request, Response } from "express";
import handle from "../../core/request-class";

export default async function listPosts(request: Request, reply: Response) {
  const requestHandler = handle(request);
  const limit = +requestHandler.input("limit") || 2;
  const page = +requestHandler.input("page") || 2;
  const skip = (page - 1) * limit;
  const postsCollection = collection("posts");
  const title = requestHandler.input("title");
  if (title) {
    const postsFilterResult = await postsCollection
      .find({ title: title })
      .toArray();
    return reply.status(200).send({afterFilter:postsFilterResult});
  }
  const allPosts = await postsCollection
    .find({})
    .limit(limit)
    .skip(skip)
    .toArray();
  reply.status(200).send({ posts: allPosts });
}
