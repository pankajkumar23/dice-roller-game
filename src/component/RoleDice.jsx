import styled from "styled-components";

const RoleDice = ({ currentDice, rotateDice }) => {

  return (
    <RoleDiceContainer className="role-dice">
      <div className="dice" onClick={rotateDice}>
        <img src={`/dice-roller-game/images/dices/dice_${currentDice}.png`} alt="Dice 1" />
      </div>

      <p>Click on Dice to roll</p>
    </RoleDiceContainer>
  );
};

export default RoleDice;
const RoleDiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  p {
    font-size: 18px;
  }

  .dice img {
    cursor: pointer;
    max-height: 100px;
    max-width: 100px;
   
  }
`;
