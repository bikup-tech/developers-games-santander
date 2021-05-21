const { Router } = require('express');
const teamsController = require('../controllers/teamsController');

const router = Router();

router.route('/')
  .post(teamsController.createTeam);

module.exports = router;
