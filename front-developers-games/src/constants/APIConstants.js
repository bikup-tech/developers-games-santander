export default {
  HOSTNAME: 'http://localhost:4200',
  LOAD_TEAM_CHALLENGES_ENDPOINT: (teamId) => `/api/teamChallenges?teamId=${teamId}`,
  LOAD_CHALLENGE_DETAIL: (challengeId) => `/api/teamChallenges/${challengeId}`,
};
