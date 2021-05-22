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
  },
  authReducer: {
    user: { isLogged: false },
  },
};
