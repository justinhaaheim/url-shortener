// db.js
const config = require("./env.js");

var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://" +
    config.mongodb.username +
    ":" +
    config.mongodb.password +
    "@ds151662.mlab.com:51662/jdh-rest-api"
);
