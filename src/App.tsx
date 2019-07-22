import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/SimpleCard'
import SimpleCard from './components/SimpleCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleCard />
      </header>
    </div>
  );
}

export default App;
