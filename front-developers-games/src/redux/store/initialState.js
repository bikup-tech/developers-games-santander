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
  },
  authReducer: {
    user: { isLogged: false },
  },
};
