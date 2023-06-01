const express = require("express");
const router = express.Router();
const JobSeeker = require("./../models/JobSeeker.model");
const Recruiter = require("./../models/Recruiter.model");
// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");

// ℹ️ Handles password encryption
const jwt = require("jsonwebtoken");

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isAuthenticated) middleware in order to control access to specific routes
const { isAuthenticated } = require("../middleware/isAuthenticated");

// How many rounds should bcrypt run the salt (default - 10 rounds)
const saltRounds = 10;

// POST /auth/signup  - Creates a new user in the database
router.post("/signup", (req, res, next) => {
  let data = { ...req.body };

  // const { email, password,  } = req.body;
  if (!data.firstName || !data.lastName || !data.email || !data.password) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields" });
  }
  if (data.isJobSeeker && !data.linkedInProfile) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields" });
  }

  // Check if email or password or name are provided as empty strings
  // if (email === "" || password === "" || firstName === "") {
  //   res.status(400).json({ message: "Provide email, password and first name" });
  //   return;
  // }

  // This regular expression check that the email is of a valid format
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  // if (!emailRegex.test(email)) {
  //   res.status(400).json({ message: "Provide a valid email address." });
  //   return;
  // }

  // // This regular expression checks password for special characters and minimum length
  // const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  // if (!passwordRegex.test(password)) {
  //   res.status(400).json({
  //     message:
  //       "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
  //   });
  //   return;
  // }

  // Check the users collection if a user with the same email already exists
  User.findOne({ email: data.email })
    .then(async (foundUser) => {
      // If the user with the same email already exists, send an error response
      if (foundUser) {
        res.status(400).json({ message: "User already exists." });
        return;
      }

      // If email is unique, proceed to hash the password
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(data.password, salt);

      // Create the new user in the database
      // We return a pending promise, which allows us to chain another `then`
      if (data.isJobSeeker) {
        return JobSeeker.create({ ...data, password: hashedPassword });
      } else {
        return Recruiter.create({ ...data, password: hashedPassword });
      }
      // return User.create({ email, password: hashedPassword, name });
    })
    .then((createdUser) => {
      // Deconstruct the newly created user object to omit the password
      // We should never expose passwords publicly
      const { email, name, _id } = createdUser;

      // Create a new object that doesn't expose the password
      const user = { email, name, _id };

      // Send a json response containing the user object
      res.status(201).json({ user: user });
    })
    .catch((err) => next(err)); // In this case, we send error handling to the error handling middleware.
});

// POST  /auth/login - Verifies email and password and returns a JWT
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  // Check if email or password are provided as empty string
  if (email === "" || password === "") {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }

  // Check the users collection if a user with the same email exists
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        // If the user is not found, send an error response
        res.status(401).json({ message: "User not found." });
        return;
      }
      console.log(password, foundUser);
      // Compare the provided password with the one saved in the database
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

      if (passwordCorrect) {
        // Deconstruct the user object to omit the password
        const { _id, email, name } = foundUser;

        // Create an object that will be set as the token payload
        const payload = { _id, email, name };

        // Create a JSON Web Token and sign it
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });

        // Send the token as the response
        res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
    })
    .catch((err) => next(err)); // In this case, we send error handling to the error handling middleware.
});

// imported fron jobSeeker.routes

router.patch("/", isAuthenticated, async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/", isAuthenticated, async (req, res, next) => {
  try {
    const deletedJobSeeker = await User.findByIdAndDelete(req.user._id);
    res.json({ message: `${req.params.id} has been deleted successfully ` });
  } catch (error) {
    next(error);
  }
});

//imporetd from recruiter.routes

// router.patch("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   const { firstName, lastName, email } = req.body;
//   try {
//     const updateRecruiter = await Recruiter.findByIdAndUpdate(
//       id,
//       { firstName, lastName, email },
//       { new: true }
//     );
//     console.log("Test to see if it works:", updateRecruiter);
//     res.json(updateRecruiter);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const deleteRecruiter = await Recruiter.findByIdAndDelete(id);
//     res.json({ message: "The user has be deleted" });
//   } catch (error) {
//     next(error);
//   }
// });

// GET  /auth/verify  -  Used to verify JWT stored on the client
router.get("/verify", isAuthenticated, async (req, res, next) => {
  // If JWT token is valid the payload gets decoded by the
  // isAuthenticated middleware and is made available on `req.payload`
  // console.log(`req.payload`, req.payload);

  // Send back the token payload object containing the user data
  res.status(200).json(req.user);
});

module.exports = router;
