const router = require("express").Router();
const Recruiter = require("./../models/Recruiter.model");

router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, photoProfile } = req.body;

    const createdRecruiterProfile = await Recruiter.create({
      firstName,
      lastName,
      email,
      password,
      photoProfile,
    });
    res.status(201).json(createdRecruiterProfile);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating the profile", error: error.message });
  }
});

module.exports = router;
