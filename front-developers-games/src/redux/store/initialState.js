export default {
  mainReducer: {
    tournamentId: '60be036d5695a3805e903f91',
    participants: [],
    team: {
      name: '',
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
        name: '', _id: '', isCaptain: false, isAdmin: false,
      },
    },
  },

  profileReducer: {
    teamName: '',
    password: '',
    newPassword: '',
  },
};
