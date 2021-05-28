export default {
  mainReducer: {
    participants: ['gerard'],
    team: {
      name: 'bikUP',
      _id: '60afcf7a83a2f45281f45fdf',
    },
    alert: { type: '', message: '' },
    tournamentId: '60a909ec62f534c96ab339d7',
    toLoadChallengeDetail: localStorage.getItem('toLoadChallengeDetail') || '',
  },

  registerReducer: {
    participants: [],
    teamName: '',
    participant1: {
      isCaptain: true,
      name: '',
      surname: '',
      email: '',
      phone: '',
      teamNumber: 1,
    },
    registerTermsConditions: false,
    registerWrongValues: {
      teamName: false,
      participant1: {
        wrongname: false,
        wrongsurname: false,
        wrongemail: false,
        wrongphone: false,
      },
    },
    registerTeamError: null,
  },

  authReducer: {
    user: { isLogged: true },
  },
};
