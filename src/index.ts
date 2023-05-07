import express from "express";
import { router } from "./router";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import http from "node:http";
import { Server } from "socket.io";

dotenv.config();

const uri = process.env.MONGODB_URI;
const app = express();
const server = http.createServer(app);
export const io = new Server(server);
const staticPath = String(process.env.IMAGES_PATH);

mongoose.set("strictQuery", false);
mongoose
  .connect(String(uri))
  .then(() => {
    app.use("/images", express.static(staticPath));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(router);
    const port: number = Number(process.env.PORT) || 8000;

    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port} 🚀`);
    });
  })

  .catch((error) => {
    console.log(`Error on connecting to database: ${error}`);
  });
