const { model, Schema } = require("mongoose");
const User = require("./User.model");

const jobSeekerSchema = new Schema({
  phone: {
    type: String,
  },

  city: {
    type: String,
  },

  linkedInProfile: {
    type: String,
    required: true,
  },

  bio: {
    type: String,
    maxLength: 1000,
  },
});

const JobSeeker = User.discriminator("JobSeeker", jobSeekerSchema);

module.exports = JobSeeker;
