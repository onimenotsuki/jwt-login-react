import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Reducer
import authReducer from '../reducers/auth-reducer';

// Creamos el contexto
const AuthContext = createContext();

// Inicializamos el estado
const initialState = {
  token: localStorage.getItem('token'),
  isAuth: JSON.parse(localStorage.getItem('isAuth')),
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = { children: PropTypes.element };

export { AuthProvider, AuthContext };
