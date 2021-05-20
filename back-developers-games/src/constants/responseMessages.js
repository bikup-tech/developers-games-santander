module.exports = {
  DEFAULT_ERROR: 'There has been an error',
  EMPTY_BODY: 'Request body is empty',
  MISSING_PROP: (prop) => `${prop} prop is missing`,
  BIKE_NOT_FOUND: (bikeId) => `There is no bike with the ID: ${bikeId}`,
  BIKE_USERID_NOT_FOUND: (userId) => `There are no bikes for an user with the ID: ${userId}`,
  USER_NOT_FOUND: (userId) => `There is no user with the ID: ${userId}`,
  COMPONENT_NOT_FOUND: (componentId) => `There is no component with the ID: ${componentId}`,
  WRONG_VALUE: (prop) => `Wrong ${prop} value.`,
  GET_WORKOUTS_ERROR: 'There has been an error obtaining your strava workouts',
  STRAVA_MISSING_ACCESS_TOKEN: 'Strava access token is missing',
  DELETE_COMPONENTS_ERROR: 'There has been an error deleting the components',
  EMPTY_QUERY: 'The query object is empty',
};
