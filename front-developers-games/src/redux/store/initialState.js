export default {
  mainReducer: {
    participants: ['gerard'],
    team: {
      name: 'bikUP',
      _id: '60aba9248e75d2458b9f9761',
    },
    alert: { type: '', message: '' },
    toLoadChallengeDetail: localStorage.getItem('toLoadChallengeDetail') || '',
  },
  authReducer: {
    user: { isLogged: true },
  },
};
