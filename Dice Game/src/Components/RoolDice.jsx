
import styled from "styled-components";

const RoolDice = ({currentDice, roleDice}) => {

    

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`../Images/dice_${currentDice}.png`} alt="" style={{cursor:"pointer"}} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoolDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;

    .dice{

    }


    p{
        font-size: 24px;
        font-weight: 100;
    }
`
