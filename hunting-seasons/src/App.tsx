// src/App.tsx
import React from 'react';
import './App.css';
import SeasonChecker from './SeasonChecker';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SeasonChecker />
      </header>
    </div>
  );
}

export default App;
