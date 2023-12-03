import { Request, Response } from "express";
import handle from "../../core/request-class";
import { collection } from "../../database/connection";
import * as fs from "fs";
import { mkdir } from "fs";
import path = require("path");
import urlImage from "./image-url";
import wrong from "./error";
import Obj from "./types";
import verifyToken from "../../validation/users/compare-token";
import create_post_validation from "../../validation/posts/create-post-validation";

export default async function makePost(req: any, res: Response) {
  await verifyToken(req, res);
  await create_post_validation(req, res);
  const posts = collection("posts");
  const requestHandler = handle(req);
  const title = requestHandler.input("title");
  const content = requestHandler.input("content");
  const published = requestHandler.input("published");
  const image: any = req.files.image.data;
  const user = req.user;
  console.log(image);
  const imageName = Math.random().toString(36).substring(2, 7);
  let myPath: string | null = path.normalize(
    __dirname + `../../../../storage/uploads/${imageName}.png`
  );
  const baseName = path.basename(myPath);
  const imageUrl = urlImage(baseName);
  console.log(myPath);

  if (image) {
    fs.writeFile(myPath, image, (err) => {
      if (err) {
        console.log("Error" + err.message);
      } else {
        console.log("hallo from png");
      }
    });
  } else {
    myPath = null;
  }

  const now = new Date();
  const data: Obj = {};

  data["author"] = {
    name: user.name,
    id: user._id,
    image: baseName,
    urlImage: imageUrl,
  };
  data["createdAt"] = now;
  data["title"] = title;
  data["content"] = content;
  data["published"] = published;

  try {
    const result = await posts.insertOne(data);
    data._id = result.insertedId;
    res.status(200).send({ post: data });
  } catch (err) {
    res.status(404).send({ error: wrong.creatingPost });
  }
}
