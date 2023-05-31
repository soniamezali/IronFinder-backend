const router = require("express").Router();
const JobOffer = require("./../models/JobOffer.model");

router.post("/jobOffer", async (req, res, next) => {
  try {
    console.log(req.body);
    const {
      companyPhoto,
      companyLogo,
      companyName,
      jobTitle,
      jobLocation,
      contractType,
      jobDescription,
      creator,
    } = req.body;

    const createdJobOffer = await JobOffer.create({
      companyPhoto,
      companyLogo,
      companyName,
      jobTitle,
      jobLocation,
      contractType,
      jobDescription,
      creator,
    });
    res.status(201).json(createdJobOffer);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating the job offer", error: error.message });
  }
});

module.exports = router;
