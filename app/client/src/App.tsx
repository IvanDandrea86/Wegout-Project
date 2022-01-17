import React from 'react';
import logo from './media/logo.svg';
import './App.css';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:4000/graphql',
});
function App() {
  return (
    <Provider value={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit and save to reload.
        </p>
      
      </header>
    </div>
    </Provider>

  );
}

export default App;
