//? is this written below ok?
require("dotenv").config();
require("../db/index");
const JobSeeker = require("../models/JobSeeker.model");

const jobSeeker = [
  {
    firstName: "Sonia",
    lastName: "Mezali",
    email: "sonia.mezali@hotmail.fr",
    password: "Ironhack75",
    phone: "0637909946",
    city: "Paris",
    linkedInProfile: "https://www.linkedin.com/in/sonia-mezali-56b024246/",
    bio: "Bonjour, Je suis Sonia Mezali , je suis a la recherche d'un emploi dans le domaine de la tech.",
    isJobSeeker: true,
  },

  {
    firstName: "Antoine",
    lastName: "Breton",
    email: "antoine.breton7511@gmail.com",
    password: "Ironhack75",
    phone: "0673737373",
    city: "Vincennes",
    linkedInProfile: "https://www.linkedin.com/in/antoine-breton-54baa549/",
    bio: "Bonjour, Je suis Antoine Breton , je suis a la recherche d'un emploi dans le domaine de la tech.",
    isJobSeeker: true,
  },

  {
    firstName: "Antoine",
    lastName: "Breton",
    email: "antoine.breton7512@gmail.com",
    password: "Ironhack75",
    phone: "0673737373",
    city: "Vincennes",
    linkedInProfile: "https://www.linkedin.com/in/antoine-breton-54baa549/",
    bio: "Bonjour, Je suis Antoine Breton , je suis a la recherche d'un emploi dans le domaine de la tech.",
    isJobSeeker: true,
  },

  {
    firstName: "Antoine",
    lastName: "Breton",
    email: "antoine.breton7513@gmail.com",
    password: "Ironhack75",
    phone: "0673737373",
    city: "Vincennes",
    linkedInProfile: "https://www.linkedin.com/in/antoine-breton-54baa549/",
    bio: "Bonjour, Je suis Antoine Breton , je suis a la recherche d'un emploi dans le domaine de la tech.",
    isJobSeeker: true,
  },

  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password1",
    phone: "1234567890",
    city: "New York",
    linkedInProfile: "https://www.linkedin.com/in/johndoe/",
    bio: "I am a skilled software engineer with 5 years of experience.",
    isJobSeeker: true,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    password: "password2",
    phone: "9876543210",
    city: "London",
    linkedInProfile: "https://www.linkedin.com/in/janesmith/",
    bio: "I am a passionate graphic designer with a keen eye for detail.",
    isJobSeeker: true,
  },

  {
    firstName: "Emma",
    lastName: "Johnson",
    email: "emma.johnson@example.com",
    password: "password3",
    phone: "4567891230",
    city: "Sydney",
    linkedInProfile: "https://www.linkedin.com/in/emmajohnson/",
    bio: "I am an experienced marketing specialist with a creative approach.",
    isJobSeeker: true,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    password: "password4",
    phone: "7890123456",
    city: "San Francisco",
    linkedInProfile: "https://www.linkedin.com/in/michaelbrown/",
    bio: "I am a dedicated project manager with a track record of successful implementations.",
    isJobSeeker: true,
  },
  {
    firstName: "Sophia",
    lastName: "Wilson",
    email: "sophia.wilson@example.com",
    password: "password5",
    phone: "3210987654",
    city: "Paris",
    linkedInProfile: "https://www.linkedin.com/in/sophiawilson/",
    bio: "I am a talented UX/UI designer passionate about creating intuitive user experiences.",
    isJobSeeker: true,
  },
];

async function seekerSeed() {
  try {
    await JobSeeker.deleteMany();
    await JobSeeker.create(jobSeeker);
    console.log("Created all JobSeekers");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

seekerSeed();
