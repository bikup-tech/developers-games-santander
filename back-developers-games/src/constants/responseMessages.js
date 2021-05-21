module.exports = {
  MISSING_PROPERTIES: (properties) => `${properties} are missing`,
  NO_USER_FOUND: 'There is no user with the given credentials',
  MISSING_QUERY: 'The query param is missing',
  ALREADY_EXISTING_TEAM: (teamName) => `A team called ${teamName} already exist.`,
  MISSING_PARTICIPANT_PROPERTIES: 'Some participant is missing required fields. Be sure to include the name, surname, email and phone for each participant.',
};
