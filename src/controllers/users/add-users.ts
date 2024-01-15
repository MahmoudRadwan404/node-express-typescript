import handle from "../../core/request-class";
import validation from "../../validation/users/validation-schema";
import { Request, Response, Express } from "express";

export default async function addUser(req: Request, reply: Response) {
  const requestHandler = handle(req);
  const validationResult = await validation(requestHandler);
  if (validationResult === true) {
    reply.status(200).send({ msg: "added success" });
  } else {
    reply.status(404).send(validationResult);
  }
}
