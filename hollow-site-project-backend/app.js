const express = require('express');
const app = express();

const bosses = require('./routes/Bosses');

// middleware

app.use(express.json());

// routes

// this first argument is the root route for the bosses router
app.use('/api/v1/bosses', bosses);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});