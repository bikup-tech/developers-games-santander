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
    user: { isLogged: false, isAdmin: false, name: 'Bikup' },
  },
};
