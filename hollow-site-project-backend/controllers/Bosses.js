const Boss = require('../models/Boss');

const getAllBosses = (req, res) => {
  res.send('get all bosses');
};

// only the properties specified on the schema will pass to the database!

const createBoss = async (req, res) => {
  const boss = await Boss.create(req.body);
  res.status(201).json({
    boss
  });
};

const getBoss = (req, res) => {
  res.json({ id: req.params.id });
};

const updateBoss = (req, res) => {
  res.send('update boss');
};

const deleteBoss = (req, res) => {
  res.send('delete boss');
};

module.exports = {
  getAllBosses,
  createBoss,
  getBoss,
  updateBoss,
  deleteBoss,
}