import { ObjectId } from "mongodb";
import { collection } from "../../database/connection";
import { Request, Response } from "express";
import handle from "../../core/request-class";

const updateUser = async (req: Request, res: Response) => {
  const usersCollection = collection("users");
  const requestHandler = handle(req);
  const id = requestHandler.input("id");

  try {
    let newUser = await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    res.status(200).send({ newUser });
  } catch (err) {
    res.status(404).send(err);
  }
};

export default updateUser;
