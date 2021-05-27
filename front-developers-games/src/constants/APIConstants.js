export default {
  HOSTNAME: 'http://localhost:4200',
  LOAD_TEAM_CHALLENGES_ENDPOINT: (teamId) => `/api/teamChallenges?teamId=${teamId}`,
  REGISTER_TEAM: '/api/teams',
};
