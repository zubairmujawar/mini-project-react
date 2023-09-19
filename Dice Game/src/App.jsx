import './App.css'
import { useState } from 'react'
import StartGamePage from './Components/StartGamePage'
import GamePlay from './Components/GamePlay';


function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setisGameStarted((prev) => !prev);
  }

  return (
    <>
    {isGameStarted? <GamePlay/> : <StartGamePage
    toggle={toggleGamePlay}
    />}
    </>
  )
}

export default App;



