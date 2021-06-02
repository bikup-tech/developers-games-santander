const { Router } = require('express');

const profileController = require('../controllers/profileController');

const router = Router();

router.route('/team')
  .patch(profileController.modifyTeamProfile);

module.exports = router;
