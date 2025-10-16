const express = require('express');
const app = express();

const bosses = require('./routes/Bosses');
const connectDB = require('./db/connect');

// in order to access our secret values on .env, we only need to require the dotenv package
require('dotenv').config();

// middleware

app.use(express.static('../hollow-site-project-ts'));
app.use(express.json());

// routes

// this first argument is the root route for the bosses router
app.use('/api/v1/bosses', bosses);

const port = process.env.PORT || 3000;

// spin up the server only if the db was connected
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
