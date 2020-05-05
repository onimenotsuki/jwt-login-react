import React from 'react';

// Importamos nuestro provider para poder acceder
// a nuestro contexto en toda nuestra aplicación
import { AuthProvider } from './contexts/auth-context';

const App = () => (
  <AuthProvider>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </AuthProvider>
);

export default App;
