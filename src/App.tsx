import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function component
function App() {
  // logic for component, functionality
  const [myDate, myDateUpdate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      myDateUpdate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  // UI of component
  return (
    <div>
        <h3>Example React</h3>
        <input/>
        <div>{myDate.toString()}</div>
    </div>
  );
}

export default App;
