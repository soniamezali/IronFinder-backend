//? is this written below ok?
require("dotenv").config();
require("../db/index");
const User = require("../models/User.model");
const recruiter = [
  {
    firstName: "Florian",
    lastName: "Thompson",
    email: "floT@email.com",
    password: "12345",
  },

  {
    firstName: "Hugo",
    lastName: "Boss",
    email: "hugoB@email.com",
    password: "12345",
  },
];

async function recruiterSeed() {
  try {
    await User.deleteMany();
    await User.create(recruiter);
    //console.log("created all recruiters");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

recruiterSeed();
