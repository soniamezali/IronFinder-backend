const router = require("express").Router();
const Recruiter = require("./../models/Recruiter.model");
const { isAdmin } = require("./../middleware/isAdmin");
const { isAuthenticated } = require("../middleware/isAuthenticated");

// router.post("/", async (req, res, next) => {
//   try {
//     const { firstName, lastName, email, password, photoProfile } = req.body;
//     if (firstName || lastName || email || password) {
//       return res
//         .status(400)
//         .json({ message: "Please fill all the required fields" });
//     }

//     Recruiter.findOne({ email: email })
//     .then(async (foundUser) => {
//       // If the user with the same email already exists, send an error response
//       if (foundUser) {
//         res.status(400).json({ message: "User already exists." });
//         return;
//       }

//       // If email is unique, proceed to hash the password
//       const salt = await bcrypt.genSalt(saltRounds);
//       const hashedPassword = await bcrypt.hash(password, salt);

//       // Create the new user in the database
//       // We return a pending promise, which allows us to chain another `then`
//       if (data.isJobSeeker) {
//         return JobSeeker.create({ ...data, password: hashedPassword });
//       } else {
//         return Recruiter.create({ ...data, password: hashedPassword });
//       }
//       // return User.create({ email, password: hashedPassword, name });
//     })
//     .then((createdUser) => {
//       // Deconstruct the newly created user object to omit the password
//       // We should never expose passwords publicly
//       const { email, name, _id } = createdUser;

//       // Create a new object that doesn't expose the password
//       const user = { email, name, _id };

//       // Send a json response containing the user object
//       res.status(201).json({ user: user });
//     })
//     .catch((err) => next(err)); // In this case, we send error handling to the error handling middleware.
// });

//     const createdRecruiterProfile = await Recruiter.create({
//       firstName,
//       lastName,
//       email,
//       password,
//       photoProfile,
//     });
//     res.status(201).json(createdRecruiterProfile);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ message: "Error creating the profile", error: error.message });
//   }
// });

router.get("/:id", isAuthenticated, async (req, res, next) => {
  console.log("getting inside the recruiter/id route");
  try {
    const { id } = req.params;
    const oneRecruiter = await Recruiter.findById(id);
    res.json(oneRecruiter);
  } catch (error) {
    next(error);
  }
});

// router.get("/", async (req, res, next) => {
//   try {
//     const allRecruiters = await Recruiter.find();
//     res.json(allRecruiters);
//   } catch (error) {
//     next(error);
//   }
// });

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

module.exports = router;
