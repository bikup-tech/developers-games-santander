export default {
  mainReducer: {
    tournamentId: '60a909ec62f534c96ab339d7',
    participants: ['gerard'],
    team: {
      name: 'bikUP',
      _id: '60afcf7a83a2f45281f45fdf',
    },
    alert: { type: '', message: '' },
    toLoadChallengeDetail: localStorage.getItem('toLoadChallengeDetail') || '',
  },
  authReducer: {
    user: { isLogged: true, isAdmin: true },
  },
};
