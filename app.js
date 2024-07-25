const express = require('express');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/nodejs-backend-assignment")
  .then(() => console.log("Connection with Data Base is Established Successfully"))
  .catch((err) => console.log("Error with Connection with Data Base", err));

app.use('/articles', articleRoutes);
app.use('/users', userRoutes);

module.exports = app;
