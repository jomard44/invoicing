import express from "express";
import mongoose from "mongoose";
import router from "./routes/api/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser())

app.use("/api", router);

mongoose.connect(process.env.MONGODB).then(
  app.listen(process.env.PORT, () => {
    console.log("server is running");
  })
);
