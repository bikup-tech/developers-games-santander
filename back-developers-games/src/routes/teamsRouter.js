const { Router } = require('express');
const teamsController = require('../controllers/teamsController');
const teamController = require('../controllers/teamController');

const router = Router();

router.route('/')
  .get(teamsController.getTournamentTeams)
  .post(teamsController.createTeam);

router.route('/:teamId')
  .patch(teamController.updateTeam)
  .delete(teamController.deleteTeam);

router.route('/captain/:captainId')
  .get(teamController.getTeamByCaptainId);

module.exports = router;
