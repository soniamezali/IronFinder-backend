const { model, Schema } = require("mongoose");
const User = require("./User.model");
// const recruiterSchema = new Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   password: {
//     type: String,
//     required: true,
//   },

//   photoProfile: {
//     type: String,
//     default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png ",
//   },
// });

// const Recruiter = model("Recruiter", recruiterSchema);
const Recruiter = User.discriminator("Recruiter", new Schema({}));

module.exports = Recruiter;
