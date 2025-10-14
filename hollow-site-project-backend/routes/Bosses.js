const express = require('express');
const router = express.Router();

const { getAllBosses, createBoss, getBoss, deleteBoss, updateBoss } = require('../controllers/Bosses');

router.route('/')
  .get(getAllBosses)
  .post(createBoss);

router.route('/:id')
  .get(getBoss)
  .patch(updateBoss)
  .delete(deleteBoss);

module.exports = router;