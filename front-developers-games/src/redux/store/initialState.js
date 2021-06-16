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
        name: 'superadmin',
        surname: '',
        _id: '60c7220085cd6017500fb9a8',
        email: 'admin',
        phone: '1213123',
        role: userRoles.SUPER_ADMIN,
      },
    },
  },

  profileReducer: {
    teamName: '',
    password: '',
    newPassword: '',
  },
};
