export default {
  mainReducer: {
    participants: ['gerard'],
    registerForm: {
      team: {
        name: '',
        participants: [],
      },
      participant: {
        isCaptain: false,
        email: '',
        name: '',
        surname: '',
        phone: '',
      },
    },
  },
  authReducer: {
    user: { isLogged: false },
  },
};
