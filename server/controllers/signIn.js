const User = require("../mongo/model/User");
const bcrypt = require("bcryptjs");
const handleSignIn = async (req, res) => {
  // TODO: Implement this function
  const { email, password } = req.body;
  // Check if the user already exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: "User does not exist" });
  }
  // Check if the password is correct
  const validPassword = bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: "Invalid password" });
  }
  res.status(200).send({
    message: "Sign in successful",
    user: {
      email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    statusCode: 200,
  }); // Respond with the sign in successful message
};

module.exports.handleSignIn = handleSignIn;
