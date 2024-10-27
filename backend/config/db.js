const mongoose = require("mongoose");

// Use the correct environment variable name
const url = process.env.MONGO_URI;

const connect = async () => {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

module.exports = connect;
