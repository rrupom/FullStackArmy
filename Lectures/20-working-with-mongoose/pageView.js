const mongoose = require("mongoose");

const pageSchema = mongoose.Schema({
  name: String,
  visitors: Number,
  admin: String,
});

module.exports = pageSchema;
