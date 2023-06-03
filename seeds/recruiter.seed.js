//? is this written below ok?
require("dotenv").config({ path: "./../.env" });
require("../db/index");
const Recruiter = require("../models/Recruiter.model");

const recruiter = [
  {
    firstName: "Florian",
    lastName: "Thompson",
    email: "floT@email.com",
    password: "12345",
    photoProfile,
  },

  {
    firstName: "Hugo",
    lastName: "Boss",
    email: "hugoB@email.com",
    password: "12345",
    photoProfile,
  },
];

async function recruiterSeed() {
  try {
    await Recruiter.deleteMany();
    await Recruiter.create(recruiter);
    console.log("created all recruiters");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

recruiterSeed();
