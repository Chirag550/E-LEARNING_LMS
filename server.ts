import { app } from "./app";
import dotenv from "dotenv";
import connectdb from "./utils/db";

dotenv.config();

//create server
app.listen(process.env.PORT, () => {
  console.log(`Server is connected with ${process.env.PORT}`);
  connectdb();
});
