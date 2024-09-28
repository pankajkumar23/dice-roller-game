import React, { useState } from "react";
import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "./styled/Button";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setselectedNum] = useState();
  const [currentDice, setDice] = useState(1);
  const [errer, setError] = useState("");
  const [showrules, setRules] = useState(false);

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const rotateDice = () => {
    if (!selectedNum) {
      setError("You have not seleted any number");
      return;
    }

    const RandomNUm = generateRandomNum(1, 6);
    setDice((prev) => RandomNUm);

    if (selectedNum === RandomNUm) setScore((prev) => prev + RandomNUm);
    else {
      setScore((prev) => prev - 2);
    }
    setselectedNum(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainConatiner className="all-container">
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelect
          errer={errer}
          setError={setError}
          selectedNum={selectedNum}
          setselectedNum={setselectedNum}
        />
      </div>
      <RoleDice currentDice={currentDice} rotateDice={rotateDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setRules((prev) => !prev)}>
          {showrules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showrules && <Rules />}
    </MainConatiner>
  );
};

export default GamePlay;
const MainConatiner = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
margin-top:10px;
    max-height: 140px;
  }
  .btns {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
