function authController() {
  function getFunction(req, res) {
    console.log('arriba al get');
  }

  return { getFunction };
}

module.exports = authController();
