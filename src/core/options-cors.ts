import cors from "cors";
const allowedOrigens = ["http://127.0.0.1:3000/posts"];
export const options: cors.CorsOptions = {
  origin: allowedOrigens,
};
