"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const users = [
    { id: 1, nameone: "momo" },
    {
        id: 2,
        nametwo: "mahmoud",
    },
];
app.get("/", (request, response) => {
    response.send("OK");
});
app.get("/users", (request, response) => {
    const reqQuery = request.query;
    if (reqQuery == null) {
        return response.send({
            users,
        });
    }
    return response.send({
        query: reqQuery,
        users: users,
    });
});
app.get("/users/:id", (request, response) => {
    const reqid = +request.params.id;
    const FuserId = users.find((user) => user.id === reqid);
    /* if (request.params.id !=null) {
      return { id: request.params.id };
    } else return "write some id";*/
    console.log(reqid);
    if (!FuserId) {
        return response.json({ msg: "not found id" });
    }
    response.json(FuserId);
});
app.listen(3000, () => {
    console.log("listening");
});
