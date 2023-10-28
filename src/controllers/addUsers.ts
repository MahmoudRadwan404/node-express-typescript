let users=require("../database/users.json")

const addUser = async function (req: any, reply: any) {
  users.push(req.body);
  reply.send("success");
};

export default addUser;
