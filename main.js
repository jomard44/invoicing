import express from "express";
import mongoose from "mongoose";
import router from "./routes/api/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", router);

mongoose.connect(process.env.MONGODB).then(
  app.listen(process.env.PORT, () => {
    console.log("server is running");
  })
);
