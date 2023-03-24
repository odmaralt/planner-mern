const express = require("express");
const router = express.Router();
const User = require("../../models/userSchema");

exports.createUser = async (request, response, next) => {
  const body = request.body;
  if (!body.password) {
    return response.status(404).json({ message: "Bad request" });
  }
  try {
    const createdUser = await User.create({
      ...body,
      password: body.password,
    });
    return response.status(201).json(createdUser);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
