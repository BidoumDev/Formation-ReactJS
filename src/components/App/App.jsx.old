import { useEffect, useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

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

  //let counter = 0;
  const [counter, setCounter] = useState(-1);  // Valeur étatique

  useEffect(() => { 
    // Mount         
    return () => {
      // Unmount
    };
  }, [])              // Se déclenche comme un constructeur ou onReady

  useEffect(() => {
    return () => {
      //effect
    };
  })     

  return (
    <div className="App">
      {
      /*<Button text="Valider"/>
      <Button text="Annuler"/>*/
      }
      <div>Comteur : {counter}</div>
      <Button bgColor="green" onButtonClick={()=>{
        setCounter(counter+1);
      }}>+1</Button>
      <Button bgColor="red" onButtonClick={()=>{
        setCounter(counter-1);
      }}>-1</Button>
    </div>
  );
}

export default App
