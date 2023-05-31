const { model, Schema } = require("mongoose");

const favoriteSchema = new Schema({
  jobSeeker: {
    type: Schema.Types.ObjectId,
    ref: "JobSeeker",
    required: true,
  },
  jobOffer: {
    type: Schema.Types.ObjectId,
    ref: "JobOffer",
    required: true,
  },
});

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
