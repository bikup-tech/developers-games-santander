export default {
  mainReducer: {
    participants: ['gerard'],
    team: {
      name: 'bikUP',
      _id: '60aba9248e75d2458b9f9761',
    },
    alert: { type: '', message: '' },
    tournamentId: '60a909ec62f534c96ab339d7',
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
    registerThermsConditions: false,
    registerWrongValues: {
      teamName: false,
      participant1: {
        wrongname: false,
        wrongsurname: false,
        wrongemail: false,
        wrongphone: false,
      },
    },

  },

  authReducer: {
    user: { isLogged: true },
  },
};
