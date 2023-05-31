const router = require("express").Router();
const Recruiter = require("./../models /models /recruiter.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const salt = 10;
const isRecruiterAuthenticated = require("./../middlewares/isRecruiterAuthenticated");

router.post("/signup", async (req, res, next) => {
  try {
    // * Get the informations from the user input
    const { email, password } = req.body;
    // * Check if the user already exist
    const foundUser = await Recruiter.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ message: "User already exist." });
    }
    // * Password safety
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "The password must be at least 8 characters long." });
    }
    // * Generate the salt
    const generatedSalt = await bcrypt.genSalt(salt);
    // * Generate the hash for that password
    const hashedPass = await bcrypt.hash(password, generatedSalt);
    // * Should be safe to create the user.
    const createdUser = await Recruiter.create({
      email,
      password: hashedPass,
    });
    res.status(201).json({ message: " Welcome to IronFinder ", createdUser });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const foundUser = await Recruiter.findOne({ email }).select(
      "password email"
    );
    if (!foundUser) {
      return res.status(400).json({ message: "Wrong credentials" });
    }

    const samePassword = await bcrypt.compare(password, foundUser.password);
    if (!samePassword) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    //! This is where we setup what is going to be inside of the token
    const payload = { email: foundUser.email, _id: foundUser._id };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "1h",
    });

    res.json({ token: token });
  } catch (error) {
    next(error);
  }
});

router.get("/me", isRecruiterAuthenticated, async (req, res, next) => {
  res.json(req.user);
});

module.exports = router;
