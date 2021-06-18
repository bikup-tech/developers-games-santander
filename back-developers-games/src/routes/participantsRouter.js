const { Router } = require('express');

const participantController = require('../controllers/participantController');

const router = Router();

router.route('/')
  .post(participantController.createParticipant);

router.route('/:participantId')
  .delete(participantController.deleteParticipant);

module.exports = router;
