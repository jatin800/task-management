import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

const PORT = 5000;

mongoose
  .connect("mongodb://localhost:27017/mernstack_crud")
  .then(() => console.log("Connect to MongoDB"))
  .catch((error) => console.log(" Error Connecting to MongoDB", error));


  app.use(router)

app.listen(PORT),
  () => {
    console.log(`Server is running on port ${PORT}`);
  };
