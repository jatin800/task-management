import express from "express";
import mongoose from "mongoose";
import User from "./model/userModel.js";

const app = express();

app.use(express.json());

const PORT = 5000;

mongoose
  .connect("mongodb://localhost:27017/mernstack_crud")
  .then(() => console.log("Connect to MongoDB"))
  .catch((error) => console.log(" Error Connecting to MongoDB", error));

app.post("/createuser", async (req, res) => {
  try {
    const dataBody = req.body;
    const user = new User(dataBody);
    const userCreated = await user.save();
    res.send(userCreated);
  } catch (error) {
    console.log("Error in CreateUser", error);
    res.status(500).send(error);
  }
});

app.listen(PORT),
  () => {
    console.log(`Server is running on port ${PORT}`);
  };
