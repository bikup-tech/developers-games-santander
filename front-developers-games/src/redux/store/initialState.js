import userRoles from '../../constants/userRoles';

export default {
  mainReducer: {
    tournamentId: '60be036d5695a3805e903f91',
    participants: [],
    team: {
      name: '',
    },
    alert: { type: '', message: '' },
    toLoadChallengeDetail: localStorage.getItem('toLoadChallengeDetail') || '',
    toLoadTeamDetail: localStorage.getItem('toLoadTeamDetail') || '',
  },

  registerReducer: {
    participants: [],
    teamName: '',
    participant1: {
      role: userRoles.CAPTAIN,
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
        name: 'capi',
        surname: '',
        _id: '60c72d11ffd18e2169221cd8',
        email: 'gerardramonp@gmail.com',
        phone: '1213123',
        role: userRoles.CAPTAIN,
      },
    },
  },

  profileReducer: {
    teamName: '',
    password: '',
    newPassword: '',
  },
};
