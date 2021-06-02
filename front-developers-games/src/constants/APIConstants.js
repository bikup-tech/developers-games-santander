export default {
  HOSTNAME: 'http://localhost:4200',
  LOAD_TEAM_CHALLENGES_ENDPOINT: (teamId) => `/api/teamChallenges?teamId=${teamId}`,
  REGISTER_TEAM: '/api/teams',
  LOGIN: '/api/auth',
  LOAD_CHALLENGE_DETAIL: (challengeId) => `/api/teamChallenges/${challengeId}`,
  UPLOAD_CHALLENGE_DELIVERABLE: (challengeId) => `/api/teamChallenges/deliverable/${challengeId}`,
  UPDATE_CHALLENGE: (challengeId) => `/api/teamChallenges/${challengeId}`,
  UPDATE_TEAM: (teamId) => `/api/teams/${teamId}`,
  LOAD_TOURNAMENT_TEAMS: (tournamentId) => `/api/teams?tournamentId=${tournamentId}`,
  EDIT_TEAM_PROFILE: '/api/profile/team',
  CHECK_PASSWORD: '/api/auth/check',
  LOAD_TEAM: (captainId) => `/api/teams/captain/${captainId}`,
};
