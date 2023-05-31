const router = require("express").Router();
const Favorite = require("./../models/Favorite.model");

router.get("/favorite", async (req, res, next) => {
  try {
    const allFavOffers = await Favorite.find();
    res.json(allFavOffers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
