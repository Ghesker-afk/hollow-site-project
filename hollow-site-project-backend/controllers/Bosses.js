const Boss = require('../models/Boss');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllBosses = asyncWrapper(async (req, res) => {
    // no filtering objects = get all the bosses in the db (doesn't have filters) with empty object
    const boss = await Boss.find({});
    res.status(200).json({ boss });
  } 
);

const createBoss = asyncWrapper(async (req, res) => {
  // only the properties specified on the schema will pass to the database!
  const boss = await Boss.create(req.body);
  res.status(201).json({
    boss
  });
});

const getBoss = asyncWrapper(async (req, res, next) => {
    const { id: bossID } = req.params;
    const boss = await Boss.findOne({
      _id: bossID
    });

    if (!boss) {
      return next(createCustomError`No boss with id: ${bossID}`, 404);
      /* return res.status(404).json({
        msg: `No boss with id ${bossID}`
      });
      */
    }

    res.status(200).json({ boss });
});

const deleteBoss = asyncWrapper(async (req, res) => {
    const { id: bossID } = req.params;
    const boss = await Boss.findOneAndDelete({
      _id: bossID
    });

    if (!boss) {
      return next(createCustomError(`No boss with id: ${bossID}`, 404));
    }

    res.status(200).json({boss});
});

const updateBoss = asyncWrapper(async (req, res) => {
    const { id: bossID } = req.params;
    const boss = await Boss.findOneAndUpdate({
      _id: bossID
    }, req.body, {
      new: true,
      runValidators: true
    });

    if (!boss) {
      return next(createCustomError(`No boss with id: ${bossID}`, 404));
    }

    res.status(200).json({
      id: bossID,
      data: req.body
    });

});

module.exports = {
  getAllBosses,
  createBoss,
  getBoss,
  updateBoss,
  deleteBoss,
}