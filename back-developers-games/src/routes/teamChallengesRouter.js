const { Router } = require('express');
const teamChallengesController = require('../controllers/teamChallengesController');
const teamChallengeController = require('../controllers/teamChallengeController');

const router = Router();

router.route('/')
  .get(teamChallengesController.getTeamChallenges);

router.route('/:teamChallengeId')
  .get(teamChallengeController.getTeamChallengeById)
  .patch(teamChallengeController.updateTeamChallenge);

module.exports = router;