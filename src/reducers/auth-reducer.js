const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
