import app from "./server";
import getAllUsers from "./controllers/users/get-all-users";
import getSingleUser from "./controllers/users/get-single-user";
import addUser from "./controllers/users/add-users";
import updateUser from "./controllers/users/update-user";
import deleteUser from "./controllers/users/delete-user";
import logIn from "./controllers/users/login";
import verifyToken from "./validation/users/compare-token";
import forget from "./controllers/users/forget-pass";
import reset from "./controllers/users/reset-pass";
import makePost from "./controllers/posts/make-post";
import deletePost from "./controllers/posts/delete-post";
import listPosts from "./controllers/posts/list";
import updatePost from "./controllers/posts/edit-post";
import getSinglePost from "./controllers/posts/get-single-post";
import create_post_validation from "./validation/posts/create-post-validation";
import imageShow from "./controllers/posts/image-show";
import multer from "multer";
import addUserValidation from "./validation/users/addUserVal";

//-------------------login------------------------------------
app.get("/users", getAllUsers); //has preHandler inside the handler and the preHandler is "verifyToken"
app.get("/users/:id", getSingleUser);
app.post("/users", addUser);
app.patch("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
app.post("/users/logIn", logIn);
app.post("/users/forget", forget);
app.post("/users/reset", reset);
//------------------------posts------------------------
app.get("/posts", listPosts);
app.get("/posts/:id", getSinglePost);
app.post("/posts",makePost); //two preHandlers "verifyToken","create_post_validation"
app.delete("/posts/:id", deletePost);
app.put("/posts/:id", updatePost);
//-------------------------------------------------------------
//app.post('/',addUserValidation)