export default {
  mainReducer: {
    tournamentId: '60a909ec62f534c96ab339d7',
    participants: ['gerard'],
    team: {
      name: 'bikUP',
      _id: '60b12eac47602f97820f7434',
    },
    alert: { type: '', message: '' },
    toLoadChallengeDetail: localStorage.getItem('toLoadChallengeDetail') || '',
  },
  authReducer: {
    user: { isLogged: true, isAdmin: true },
  },
};
