module.exports = {
  MISSING_PROPERTIES: (properties) => `${properties} are missing`,
  MISSING_QUERY_PROPERTIES: (properties) => `${properties} missing in req.query`,
  NO_USER_FOUND: 'No hay ningún usuario con estas credenciales.',
  NO_CHALLENGE_FOUND: (challengeId) => `There is not a challenge with the id ${challengeId}`,
  NO_TOURNAMENT_CHALLENGES_FOUND: (tournamentId) => `There are no active challenges for this tournament with id: ${tournamentId}.`,
  NO_TOURNAMENT_FOUND: (tournamentId) => `There is no active tournament with the id: ${tournamentId}.`,
  MISSING_QUERY: 'The query param is missing',
  ALREADY_EXISTING_TEAM: (teamName) => `A team called ${teamName} already exist.`,
  MISSING_PARTICIPANT_PROPERTIES: 'Some participant is missing required fields. Be sure to include the name, surname, email and phone for each participant.',
  REGISTER_TEAM_SUCCESS: 'Team registered successfully.',
  MISSING_USER_PROPERTIES: 'Some user is missing a required camp. Be sure to include: name, surname, email, phone and teamNumber',
};
