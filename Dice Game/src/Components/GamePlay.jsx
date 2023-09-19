import NumberSelector from '../Components/NumberSelector';
import TotalScore from '../Components/TotalScore' 
import styled from 'styled-components';
import RoolDice from './RoolDice';
import { useState } from 'react';

const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState("")

  const generateRandomNumber = (min, max)=>{
    // console.log(Math.floor((Math.random() * (max - min) + min))) //to check random number
    return Math.floor((Math.random() * (max - min) + min))

  }
  const roleDice = () =>{
     //if derect click on dice it shuld not update
    if(!selectedNumber) {

      seterror("You have not Select Any Number") 
      return;
    }
    seterror("")

    const randomNumber = generateRandomNumber(1,7);
    setcurrentDice((prev) => randomNumber)

    let correct = ()=>{
      
    }
    

    if(selectedNumber ===randomNumber){
      setscore((prev)=> prev + randomNumber)
      console.log("Correct Number")
      correct();
    }else{
      setscore(prev => prev - 2)
    }

    setselectedNumber(undefined);
  }

  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector  error={error} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
      </div>
      <RoolDice currentDice={currentDice} roleDice={roleDice} />
      <p className='correct'>Correct Number</p>
    </MainContainer>
  )
}

export default GamePlay;


const MainContainer = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  /* border: 2px solid black; */

  .correct{
    color: green;
    /* align-self: center; */
    margin: 0 auto;
  }
  .top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`