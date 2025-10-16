const Boss = require('../models/Boss');

const getAllBosses = async (req, res) => {
  try {
    // no filtering objects = get all the bosses in the db (doesn't have filters) with empty object
    const boss = await Boss.find({});
    res.status(200).json({ boss });
  } catch (error) {
    res.status(500).json({ 
      msg: error 
    });
  }
};

const createBoss = async (req, res) => {
  try {
    // only the properties specified on the schema will pass to the database!
    const boss = await Boss.create(req.body);
    res.status(201).json({
      boss
    });
  } catch (error) {
    res.status(500).json({
      msg: error
    });
  }
};

const getBoss = async (req, res) => {
  try {
    const { id: bossID } = req.params;
    const boss = await Boss.findOne({
      _id: bossID
    });

    if (!boss) {
      return res.status(404).json({
        msg: `No boss with id ${bossID}`
      });
    }

    res.status(200).json({ boss });
  } catch (error) {
    // is activated if the sytanx for the id is wrong
    res.status(500).json({
      msg: error
    });
  }
};

const deleteBoss = async (req, res) => {
  try {
    const { id: bossID } = req.params;
    const boss = await Boss.findOneAndDelete({
      _id: bossID
    });

    if (!boss) {
      return res.status(404).json({
        msg: `No boss with id ${bossID}`
      })
    }

    res.status(200).json({boss});
  } catch (error) {
    res.status(500).json({
      msg: error
    });
  }
};

const updateBoss = async (req, res) => {
  try {
    const { id: bossID } = req.params;
    const boss = await Boss.findOneAndUpdate({
      _id: bossID
    }, req.body, {
      new: true,
      runValidators: true
    });

    if (!boss) {
      return res.status(404).json({
        msg: `No boss with id ${bossID}`
      })
    }

    res.status(200).json({
      id: bossID,
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      msg: error
    })
  }
};

module.exports = {
  getAllBosses,
  createBoss,
  getBoss,
  updateBoss,
  deleteBoss,
}