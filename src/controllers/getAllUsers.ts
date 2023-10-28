//import users from "../dataBase/users.json";
let users=require("../database/users.json")

const getAllUsers = (request:any, reply:any) => {
  const reqQuery = request.query;
  console.log(users);
  if (Object.keys(request.query as any).length === 0) {
 reply.send({
      users,
    });
  }
 reply.send({
    query: reqQuery,
    users: users,
  });
};
export default getAllUsers;
