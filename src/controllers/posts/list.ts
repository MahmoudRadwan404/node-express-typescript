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
    const numberOfPages: number = Math.ceil(postsFilterResult.length / limit);
    console.log(numberOfPages);
    return reply.status(200).send({
      afterFilter: postsFilterResult,
      numOfPages: numberOfPages,
      limit, page,
      total: postsFilterResult.length
    });
  }

  const allPosts = await postsCollection
    .find({})
    .limit(limit)
    .skip(skip)
    .toArray();
  const numberOfPages: number = Math.ceil(allPosts.length / limit);
  reply.status(200).send({
    posts: allPosts,
    Pages: numberOfPages,
    limit, page,
    total: allPosts.length
  });
}
