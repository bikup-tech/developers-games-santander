const { Router } = require('express');

const participantController = require('../controllers/participantController');

const router = Router();

router.route('/:participantId')
  .delete(participantController.deleteParticipant);

module.exports = router;
