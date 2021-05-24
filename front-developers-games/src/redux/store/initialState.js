export default {
  mainReducer: {

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
        name: false,
        surname: false,
        email: false,
        phone: false,
      },
    },
  },
  authReducer: {
    user: { isLogged: false },
  },
};
