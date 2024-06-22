const { Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
});

module.exports = userSchema;
