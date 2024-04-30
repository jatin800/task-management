import express from "express";
import router from "./routes/userRoutes.js";
import { connectToMongoDB } from "./db/DB.js";

const app = express();
app.use(express.json());
connectToMongoDB();

const PORT = 5000;

app.use(router);

app.listen(PORT),
  () => {
    console.log(`Server is running on port ${PORT}`);
  };
