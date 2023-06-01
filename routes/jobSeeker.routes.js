const router = require("express").Router();
const JobSeeker = require("./../models/JobSeeker.model");

// router.post("/", async (req, res, next) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       password,
//       photoProfile,
//       phone,
//       city,
//       linkedInProfile,
//       bio,
//     } = req.body;

//     const createdJobSeekerProfile = await JobSeeker.create({
//       firstName,
//       lastName,
//       email,
//       password,
//       photoProfile,
//       phone,
//       city,
//       linkedInProfile,
//       bio,
//     });
//     res.status(201).json(createdJobSeekerProfile);
//   } catch (error) {
//     next(error);
//     res
//       .status(400)
//       .json({ message: "Error creating the profile", error: error.message });
//   }
// });

router.get("/", async (req, res, next) => {
  try {
    const allJobSeekers = await JobSeeker.find();
    res.json(allJobSeekers);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneJobSeeker = await JobSeeker.findById(id);
    if (!oneJobSeeker) {
      res.status(404).json({ message: "Job seeker not found" });
      return;
    }
    res.json(oneJobSeeker);
  } catch (error) {
    next(error);
  }
});

// router.patch("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const {
//       firstName,
//       lastName,
//       email,
//       password,
//       photoProfile,
//       phone,
//       city,
//       linkedInProfile,
//       bio,
//     } = req.body;

//     const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(
//       id,
//       {
//         firstName,
//         lastName,
//         email,
//         password,
//         photoProfile,
//         phone,
//         city,
//         linkedInProfile,
//         bio,
//       },
//       { new: true }
//     );
//     res.json(updatedJobSeeker);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     const deletedJobSeeker = await JobSeeker.findByIdAndDelete(req.params.id);
//     res.json({ message: `${req.params.id} has been deleted successfully ` });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
