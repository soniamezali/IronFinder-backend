const router = require("express").Router();
const JobOffer = require("./../models/JobOffer.model");
const JobSeeker = require("./../models/JobSeeker.model");
const Favorite = require("./../models/Favorite.model");
const User = require("./../models/User.model");
const { isAdmin } = require("../middleware/isAdmin");
const { isAuthenticated } = require("./../middleware/isAuthenticated");
const { lowerCaseParams } = require("./../middleware/lowerCaseParams.js");

router.post("/", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
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
    next(error);
    res
      .status(400)
      .json({ message: "Error creating the job offer", error: error.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allJobOffers = await JobOffer.find();
    res.json(allJobOffers);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneJobOffer = await JobOffer.findById(id);
    if (!oneJobOffer) {
      res.status(404).json({ message: "Job offer not found" });
      return;
    }
    res.json(oneJobOffer);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/favorite", isAuthenticated, async (req, res, next) => {
  try {
    const { id } = req.params;
    const myFavoritesJobOffers = await Favorite.find({ jobOffer: id }).populate(
      "jobSeeker"
    );
    res.json(myFavoritesJobOffers);
  } catch (error) {
    next(error);
  }
});
// ({ jobSeeker: id }

//routes for search bar//

router.get("/jobTitle/:jobTitle", lowerCaseParams, async (req, res, next) => {
  try {
    const job = await JobOffer.find({ jobTitle: req.params.jobTitle });
    res.json(job);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/jobLocation/:jobLocation",
  lowerCaseParams,
  async (req, res, next) => {
    try {
      const job = await JobOffer.find({ jobLocation: req.params.jobLocation });
      res.json(job);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/contractType/:contractType",
  lowerCaseParams,
  async (req, res, next) => {
    try {
      const job = await JobOffer.find({
        contractType: req.params.contractType,
      });
      res.json(job);
    } catch (error) {
      next(error);
    }
  }
);

router.patch("/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const { id } = req.params;

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

    const updatedJobOffer = await JobOffer.findByIdAndUpdate(
      id,
      {
        companyPhoto,
        companyLogo,
        companyName,
        jobTitle,
        jobLocation,
        contractType,
        jobDescription,
        creator,
      },
      { new: true }
    );
    res.json(updatedJobOffer);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const deletedJobOffer = await JobOffer.findByIdAndDelete(req.params.id);
    res.json({ message: `${req.params.id} has been deleted successfully ` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
