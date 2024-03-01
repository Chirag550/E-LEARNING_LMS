import { app } from "./app";
import dotenv from "dotenv";
import connectdb from "./utils/db";
import { v2 as cloudinary } from "cloudinary";
import http from "http";
import { initSocketServer } from "./socketServer";

const server = http.createServer(app);

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);
//create server
server.listen(process.env.PORT, () => {
  console.log(`Server is connected with ${process.env.PORT}`);
  connectdb();
});
