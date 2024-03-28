const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const mongoose = require("mongoose");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define your routes here
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/', exampleRoutes);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

mongoose.connect("mongodb+srv://rajvp1103:LuEh9Jj4F639CHRh@cluster0.otoxvs4.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
