export default {
  mainReducer: {
    participants: ['gerard'],
    team: {
      name: 'bikUP',
      _id: '60aba9248e75d2458b9f9761',
    },
    alert: { type: '', message: '' },
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
