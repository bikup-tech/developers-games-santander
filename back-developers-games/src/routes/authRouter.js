const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.route('/')
  .get(authController.getFunction);

module.exports = router;
