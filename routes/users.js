var mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

// Use environment variables for the MongoDB connection URI
require('dotenv').config();

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/loginform";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
  });

const userschema = new mongoose.Schema({
  username: String,
  secret: String,
});

userschema.plugin(plm); // This adds local authentication methods like authenticate and register

module.exports = mongoose.model("user", userschema);
