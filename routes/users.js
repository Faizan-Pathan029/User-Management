var mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/loginform");

const userschema = new mongoose.Schema({
  username: String,
  secret: String
});

userschema.plugin(plm);  // This adds local authentication methods like authenticate and register

module.exports = mongoose.model("user", userschema);
