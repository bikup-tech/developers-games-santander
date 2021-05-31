export default {
  mainReducer: {
    tournamentId: '60a909ec62f534c96ab339d7',
    participants: ['gerard'],
    team: {
      name: 'bikUP',
    },
    alert: { type: '', message: '' },
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
    user: {
      isLogged: true,
      userLogged: {
        name: 'gerard', _id: '60b4f66b4562c2e7a047f928', isCaptain: true, isAdmin: true,
      },
    },
  },

  profileReducer: {
    teamName: '',
    password: '',
    newPassword: '',
  },
};
