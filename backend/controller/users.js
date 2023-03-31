const { hashFunction } = require("../bcrypt/bcrypt");
const User = require("../models/userSchema");

exports.getUsers = async (request, response, next) => {
  try {
    const users = await User.find().exec();
    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (request, response, next) => {
  const body = request.body;

  if (!body.password) {
    return response.status(404).json({ message: "Password is required" });
  }
  const hashedPassword = hashFunction(body.password);

  try {
    const newUser = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: hashedPassword,
    });
    return response.status(201).json(newUser);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
