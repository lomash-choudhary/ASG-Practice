import express from "express";
import { userModal } from "./modal";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/serverHealthCheck", (req, res) => {
  res.status(200).json({
    message: `Server is running fine and this is the v2 new new new  of the app.`
  })
})

app.get("/getUserData", async (req, res) => {
  try {
    const data = await userModal.find({});

    res.status(200).json({
      message: "user data fetched successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/createUser", async (req, res) => {
  let username = Math.floor(Math.random() * 1000 + 1);
  let password = Math.floor(Math.random() * 1000 + 1);

  try {
    const userCreatedData = await userModal.create({
      username,
      password,
    });

    res.status(200).json({
      message: `User created successfully`,
      data: userCreatedData,
    });
  } catch (error) {
    console.log(error);
  }
});

const main = async () => {
  try {
    const connectToDB = await mongoose.connect(process.env.MONGODB_URL!)
    console.log(`Connected to mongo DB ${connectToDB.connection.host}`)
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error)
  }
};

main();
