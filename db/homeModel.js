const mongoose = require("mongoose");
const db = require("./index.js");

const homeSchema = new mongoose.Schema({
  city: { type: String },
  address: { type: String, unique: true },
  price: { type: Number },
  bedNum: { type: Number },
  bathNum: { type: Number },
  imageUrl: { type: String, unique: true }
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
