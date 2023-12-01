import { Request, Response } from "express";

export default function imageShow(request: Request, reply: Response) {
  reply.status(200).send("image.png");
}
