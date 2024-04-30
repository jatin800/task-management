import User from "../model/userModel.js";

export const createuser = async (req, res) => {
  try {
    const dataBody = req.body;
    const user = new User(dataBody);
    const userCreated = await user.save();
    res.send(userCreated);
  } catch (error) {
    console.log("Error in CreateUser", error);
    res.status(500).send(error);
  }
};
