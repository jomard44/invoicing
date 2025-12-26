import express from "express";
import mongoose from "mongoose";
import router from "./routes/api/index.js";

const app = express();
app.use(express.json());

app.use("/api", router);

mongoose.connect("mongodb://127.0.0.1:27017/invoiceDB").then(
  app.listen(3000, () => {
    console.log("server is running");
  })
);
