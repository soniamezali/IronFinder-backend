//? is this written below ok?
require("dotenv").config();
require("../db/index");
const Recruiter = require("../models/Recruiter.model");

const JobOffer = require("../models/JobOffer.model");

const jobOffer = [
  {
    companyName: "Ironhack Studios",
    jobTitle: "Web Developer",
    jobLocation: "Paris",
    contractType: "CDI",
    jobDescription:
      "Maintain Websites and participate in developing web applications",
    creator: "647ef3f11a43f111acff9d5a",
  },
  {
    companyName: "Le Wagon Studios",
    jobTitle: "UX/UI Designer",
    jobLocation: "Lyon",
    contractType: "CDD",
    jobDescription:
      "Be the bridge between clients and Web Dev's to help turn an idea into an actual application",
    creator: "647ef3f11a43f111acff9d5a",
  },
];

async function offerSeed() {
  try {
    await JobOffer.deleteMany();
    await JobOffer.create(jobOffer);
    // const recruiter = await Recruiter.find();
    // const recruiterOffer = jobOffer.map(jobOffer);
    //console.log("created all job offers");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

offerSeed();
