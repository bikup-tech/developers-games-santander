const { Router } = require('express');
const teamsController = require('../controllers/teamsController');
const teamController = require('../controllers/teamController');

const router = Router();

router.route('/')
  .post(teamsController.createTeam);

router.route('/:captainId')
  .get(teamController.getTeamByCaptainId);

module.exports = router;
