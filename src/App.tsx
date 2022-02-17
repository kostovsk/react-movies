import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import UseEffectExamples from './UseEffectExamples';
import Grandparent from './Grandparent';
import './App.css';
import ValueContext from './ValueContext';

// function component
function App() {
  const [hide, setHide] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples />}

      <ValueContext.Provider value={hide}>
        <Grandparent />
      </ValueContext.Provider>
    </>
  )
}

export default App;
