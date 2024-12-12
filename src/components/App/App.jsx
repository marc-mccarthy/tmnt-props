import React from 'react';
import TurtleList from '../TurtleList/TurtleList';
import './App.css';

// Turtles (Array)
const turtles = [
  { id: 1, name: 'Leo', color: 'RoyalBlue' },
  { id: 2, name: 'Raph', color: 'FireBrick' },
  { id: 3, name: 'Don', color: 'DarkOrchid' },
  { id: 4, name: 'Mike', color: 'DarkOrange' },
];

// Status (Object)
const status = {
  Leo: 'Ready',
  Raph: 'Training',
  Don: 'Inventing',
  Mike: 'Gaming',
};

const App = () => {
  return (
    <div className='app'>
      <h1>TMNT Turtle Time</h1>
      <TurtleList turtles={turtles} status={status} />
    </div>
  );
};

export default App;
