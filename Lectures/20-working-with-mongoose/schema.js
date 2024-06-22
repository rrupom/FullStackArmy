const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://localhost:27017/");

conn.model("User", require("./schema3"));
conn.model("PageView", require("./pageView"));

module.exports = conn;
