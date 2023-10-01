const User = require("../mongo/model/User");
const bcrypt = require("bcryptjs");

const handleNewUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    // Check if the user already exists
    const duplicate = await User.findOne({ email });
    if (duplicate) {
      return res.status(400).json({ error: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    await newUser.save();
    res.send({
      message: "User created successfully",
      stausCode: 200,
      data: {
        email,
        firstName,
        lastName,
      },
    }); // Respond with the newly created user
  } catch (error) {
    console.error("Error while creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.handleNewUser = handleNewUser;
