const { compareHash } = require("../bcrypt/bcrypt");
const UserModel = require("../models/userSchema");
const { tokenGenerate } = require("./jwt");

module.exports.authLoginWithJwt = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid User",
    });
  }
  const isPasswordCorrect = compareHash(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(404).json({
      success: false,
      message: "Invalid Password",
    });
  }
  const token = tokenGenerate(email, user._id);
  return res.status(200).json({
    success: true,
    data: {
      user: user,
      token: token,
    },
  });
};
