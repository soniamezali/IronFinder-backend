const router = require("express").Router();
const JobSeeker = require("./../models /models /jobSeeker.model");

router.post("/jobSeeker", async (req, res, next) => {
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

    const createdJobSeekerProfile = await JobSeeker.creat({
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
    res
      .status(400)
      .json({ message: "Error creating the profile", error: error.message });
  }
});

module.exports = router;
