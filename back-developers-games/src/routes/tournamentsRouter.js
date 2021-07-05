const { Router } = require('express');
const tournamentController = require('../controllers/tournamentController');

const router = Router();

router.route('/:tournamentName')
  .get(tournamentController.getTournamentByName);

module.exports = router;
