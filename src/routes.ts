import app from "./server";
import users from "./database/users.json";
import getAllUsers from "./controllers/getAllUsers";
import getSingleUser from "./controllers/getSingleUser";
import addUser from "./controllers/addUsers";
import updateUser from "./controllers/updateUser";
import deleteUser from "./controllers/deleteUser";
import {body}  from 'express-validator';

app.get("/users", getAllUsers);
app.get("/users/:id", getSingleUser);
app.post("/users",body('userName').notEmpty(),body('email').notEmpty(),body('password').notEmpty(),  addUser);
app.patch("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
