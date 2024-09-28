import styled from "styled-components";
import { Button } from "./styled/Button";
const StartGame = ({toggle}) => {
  return (
    <>
      <Container className="DiceContainer">
        <div className="dice">
       
          <img src="/dice-roller-game/images/dices 1.png" alt="" />
        </div>

        <div className="content">
          <h1>DICE GAME</h1>
          <Button className="play-now"
          onClick={toggle}
          >Play Now</Button>
        </div>
      </Container>
    </>
  );
};
export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
 
  justify-content:space-around;
  align-items: center;
.dice img{
  margin-top:80px;
max-height:500px;
max-width:500px;
}
  .content h1 {
    font-size: 76px;
  }
`;
