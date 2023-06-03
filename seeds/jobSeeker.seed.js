require("dotenv").config({ path: "./../.env" });

require("../db/index");

const JobSeeker = require("../models/JobSeeker.model");

const jobSeeker = [
  {
    firstName: "Sonia",
    lastName: "Mezali",
    email: "sonia.mezali@hotmail.fr",
    password: "Ironhack75",
    photoProfile,
    phone: "0637909946",
    city: "Paris",
    linkedInProfile: "https://www.linkedin.com/in/sonia-mezali-56b024246/",
    bio: "Bonjour, Je suis Sonia Mezali , je suis a la recherche d'un emploi dans le domaine de la tech.",
  },

  {
    firstName: "Antoine",
    lastName: "Breton",
    email: "antoine.breton7511@gmail.com",
    password: "Ironhack75",
    photoProfile,
    phone: "0673737373",
    city: "Vincennes",
    linkedInProfile: "https://www.linkedin.com/in/antoine-breton-54baa549/",
    bio: "Bonjour, Je suis Antoine Breton , je suis a la recherche d'un emploi dans le domaine de la tech.",
  },

  {
    firstName: "Antoine",
    lastName: "Breton",
    email: "antoine.breton7511@gmail.com",
    password: "Ironhack75",
    photoProfile,
    phone: "0673737373",
    city: "Vincennes",
    linkedInProfile: "https://www.linkedin.com/in/antoine-breton-54baa549/",
    bio: "Bonjour, Je suis Antoine Breton , je suis a la recherche d'un emploi dans le domaine de la tech.",
  },

  {
    firstName: "Antoine",
    lastName: "Breton",
    email: "antoine.breton7511@gmail.com",
    password: "Ironhack75",
    photoProfile,
    phone: "0673737373",
    city: "Vincennes",
    linkedInProfile: "https://www.linkedin.com/in/antoine-breton-54baa549/",
    bio: "Bonjour, Je suis Antoine Breton , je suis a la recherche d'un emploi dans le domaine de la tech.",
  },

  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password1",
    photoProfile: "john-doe-profile.jpg",
    phone: "1234567890",
    city: "New York",
    linkedInProfile: "https://www.linkedin.com/in/johndoe/",
    bio: "I am a skilled software engineer with 5 years of experience.",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    password: "password2",
    photoProfile: "jane-smith-profile.jpg",
    phone: "9876543210",
    city: "London",
    linkedInProfile: "https://www.linkedin.com/in/janesmith/",
    bio: "I am a passionate graphic designer with a keen eye for detail.",
  },

  {
    firstName: "Emma",
    lastName: "Johnson",
    email: "emma.johnson@example.com",
    password: "password3",
    photoProfile: "emma-johnson-profile.jpg",
    phone: "4567891230",
    city: "Sydney",
    linkedInProfile: "https://www.linkedin.com/in/emmajohnson/",
    bio: "I am an experienced marketing specialist with a creative approach.",
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    password: "password4",
    photoProfile: "michael-brown-profile.jpg",
    phone: "7890123456",
    city: "San Francisco",
    linkedInProfile: "https://www.linkedin.com/in/michaelbrown/",
    bio: "I am a dedicated project manager with a track record of successful implementations.",
  },
  {
    firstName: "Sophia",
    lastName: "Wilson",
    email: "sophia.wilson@example.com",
    password: "password5",
    photoProfile: "sophia-wilson-profile.jpg",
    phone: "3210987654",
    city: "Paris",
    linkedInProfile: "https://www.linkedin.com/in/sophiawilson/",
    bio: "I am a talented UX/UI designer passionate about creating intuitive user experiences.",
  },
];
