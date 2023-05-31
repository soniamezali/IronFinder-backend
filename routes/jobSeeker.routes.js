const router = require("express").Router();
const JobSeeker = require("./../models/JobSeeker.model");

router.post("/", async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      photoProfile,
      phone,
      city,
      linkedInProfile,
      bio,
    } = req.body;

    const createdJobSeekerProfile = await JobSeeker.create({
      firstName,
      lastName,
      email,
      password,
      photoProfile,
      phone,
      city,
      linkedInProfile,
      bio,
    });
    res.status(201).json(createdJobSeekerProfile);
  } catch (error) {
    next(error);
    res
      .status(400)
      .json({ message: "Error creating the profile", error: error.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allJobSeekers = await JobSeeker.find();
    res.json(allJobSeekers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
