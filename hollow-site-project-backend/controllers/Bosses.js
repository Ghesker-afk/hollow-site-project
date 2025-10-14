const getAllBosses = (req, res) => {
  res.send('get all bosses');
};

const createBoss = (req, res) => {
  res.send('create boss');
};

const getBoss = (req, res) => {
  res.send('get single boss');
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