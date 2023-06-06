const { model, Schema } = require("mongoose");

const jobOfferSchema = new Schema({
  companyPhoto: {
    type: String,
    default:
      "https://chandigarhmetro.com/wp-ontent/upload/2020/02/how-to-create-perfect-image.jpg",
  },

  companyLogo: {
    type: String,
    default:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/factory.png",
  },

  companyName: {
    type: String,
    required: true,
  },

  jobTitle: {
    type: String,
    required: true,
    enum: ["Web Developer", "Data Analyst", "UX/UI Designer"],
  },

  jobLocation: {
    type: String,
    required: true,
  },

  contractType: {
    type: String,
    required: true,
    enum: ["CDD", "CDI", "Freelance"],
  },

  jobDescription: {
    type: String,
    required: true,
    maxlength: 1000,
  },

  creator: {
    type: Schema.Types.ObjectId,
    ref: "Recruiter",
    required: true,
  },
});

const JobOffer = model("JobOffer", jobOfferSchema);

module.exports = JobOffer;
