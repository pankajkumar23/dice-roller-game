import { useState } from "react";
import "./App.css"

import StartGame from "./component/StartGame";
import GamePlay from "./component/GamePlay";

function App() {
const [IsGameStarted,setIsGameStarted]= useState(false);
const togleGamePlay =()=>{
  setIsGameStarted((prev)=>!prev);
}
  return <>
   {
    IsGameStarted ? <GamePlay/> : <StartGame toggle={togleGamePlay}/>
   }
 
  </>;
}

export default App;
