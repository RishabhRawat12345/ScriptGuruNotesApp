const User = require("../Models/Register_Schema");
const bcrypt = require("bcrypt");


const Userdata = async (req, res) => {
  const { name, email, password } = req.body;

  try {

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all the data" });
    }

    const UserExist = await User.findOne({ email });
    if (UserExist) {
      return res.status(409).json({ message: "Email already exists" });
    }


    const HashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: HashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "User successfully created",
      user: {
        name: newUser.name,
        email: newUser.email,
      }
    });
  } catch (error) {
    console.error("error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = Userdata;
