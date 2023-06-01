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

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneRecuriter = await Recruiter.findById(id);
    console.log("Does this work?", oneRecuriter);
    res.json(oneRecuriter);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allRecruiters = await Recruiter.find();
    res.json(allRecruiters);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  try {
    const updateRecruiter = await Recruiter.findByIdAndUpdate(
      id,
      { firstName, lastName, email },
      { new: true }
    );
    console.log("Test to see if it works:", updateRecruiter);
    res.json(updateRecruiter);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteRecruiter = await Recruiter.findByIdAndDelete(id);
    res.json({ message: "The user has be deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
