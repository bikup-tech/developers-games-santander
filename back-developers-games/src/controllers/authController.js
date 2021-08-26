const participantsModel = require('../models/participantModel');

// Constants
const { BAD_REQUEST, CONFLICT } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, NO_USER_FOUND } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function authController() {
  async function login(req, res) {
    const { email, password: userPassword } = req.body;

    try {
      if (!email || !userPassword) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('Email or Pasword'));
      }

      // Canviar la logica -> primer buscar el user per email. Canviar findOne per find
      // Find SEMPRE retorna un array, s'ha de tenir en compte.

      // Despres mirar si la password esta be amb bcrypt.compare(userPassword,
      // foundParticipant.password)

      // tenir en compte la possibilitat de que hi hagi 2 users amb el mateix email
      // (xk al crear els teams no es comprova).

      // en aqeust cas s'ha de filtrar per el que tingui la password correcte.

      // Si tot ok, enviar user.

      const findQuery = {
        email,
        password: userPassword,
      };

      const foundParticipant = await participantsModel.findOne(findQuery);
      if (!foundParticipant) {
        throw new CustomError(CONFLICT, NO_USER_FOUND);
      }

      // Create the participant object without the password property
      const { password, ...participant } = foundParticipant._doc;

      return handleResponseSuccess(res, participant);
    } catch (error) {
      return handleResponseError(res, error);
    }
  }

  async function checkCorrectPassword({ body: { userId, password } }, res) {
    try {
      if (!userId || !password) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('userId or Pasword'));
      }

      const findQuery = {
        _id: userId,
        password,
      };

      // Canviar la logica -> primer buscar el user sencer

      // Comprovar que la password sigui correcte amb bcrypt.compare(password, user.password)

      const foundUser = await participantsModel.findOne(findQuery);

      if (!foundUser) {
        return handleResponseSuccess(res, false);
      }

      return handleResponseSuccess(res, true);
    } catch (error) {
      return handleResponseError(res, error);
    }
  }

  return { login, checkCorrectPassword };
}

module.exports = authController();
