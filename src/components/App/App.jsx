/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

import React from "react";
import Button from "../ui/Button/Button.jsx";

function App() {
  //const [count, setCount] = useState(0)

  /*return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
  return (
    <div className="App">
      {
      /*<Button text="Valider"/>
      <Button text="Annuler"/>*/
      }
      <Button bgColor="red" color="white">Valider</Button>
      <Button bgColor="red" color="white" style={{textDecoration: 'none', fontWeight: 100}}>Annuler</Button>
      <Button bgColor="red" color="white" style={{textDecoration: 'underline', fontWeight: 900}}><img src="/delete.png"/>Cancel</Button>
    </div>
  );
}

export default App
