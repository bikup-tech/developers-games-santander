export default {
  mainReducer: {
    participants: ['gerard'],
    team: {
      name: 'bikUP',
      _id: '60afcf7a83a2f45281f45fdf',
    },
    alert: { type: '', message: '' },
    toLoadChallengeDetail: localStorage.getItem('toLoadChallengeDetail') || '',
  },
  authReducer: {
    user: { isLogged: true },
  },
};
