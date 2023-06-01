const router = require("express").Router();
const { isAuthenticated } = require("../middleware/isAuthenticated");
const Favorite = require("./../models/Favorite.model");

router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const allFavOffers = await Favorite.find({
      jobSeeker: req.user._id,
    }).populate("jobOffer");
    res.json(allFavOffers);
  } catch (error) {
    next(error);
  }
});
router.post("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const createdFavOffer = await Favorite.create({
      jobSeeker: req.user._id,
      jobOffer: req.params.id,
    });
    res.json(createdFavOffer);
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", isAuthenticated, async (req, res, next) => {
  try {
    await Favorite.findOneAndDelete({
      jobSeeker: req.user._id,
      jobOffer: req.params.id,
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
