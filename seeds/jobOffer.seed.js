//? is this written below ok?
require("dotenv").config({ path: "./../.env" });
require("../db/index");
const Recruiter = require("../models/Recruiter.model")


const JobOffer = require("../models/JobOffer.model");

const jobOffer = [
  {
    companyPhoto,
    companyLogo,
    companyName: "Ironhack Studios",
    jobTitle: "Web Developer",
    jobLocation: "Paris",
    contractType: "CDI",
    jobDescription:
      "Maintain Websites and participate in developing web applications",
    creator: "not sure at the moment",
  },
  {
    companyPhoto,
    companyLogo,
    companyName: "Le Wagon Studios",
    jobTitle: "UX/UI",
    jobLocation: "Lyon",
    contractType: "CDD",
    jobDescription:
      "Be the bridge between clients and Web Dev's to help turn an idea into an actual application",
    creator: "not sure at the moment",
  },
];

async function offerSeed() {
  try {
    await JobOffer.deleteMany();
    await JobOffer.create(jobOffer);
    const recruiter = await Recruiter.find(); 
    const recruiterOffer = jobOffer.map((jobOffer, in))
    console.log("created all job offers");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

offerSeed();
