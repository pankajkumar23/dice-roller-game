import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer className="rules">
      <h2>How to play dice game</h2>
      <div className="text">
        <p><strong>1. </strong>Select any number</p>
        <p><strong>2. </strong>Click on dice image</p>
        <p><strong>3. </strong>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p><strong>4. </strong>if you get wrong guess then 2 point will be dedcuted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
max-width: 700px;
max-height:140px;
margin: 0 auto ;
margin-top: 20px;
margin-bottom:20px;
border-radius: 10px;
background-color:  #FBF1F1;
padding:10px;
h2 {
    font-size: 17px;

}
.text{
    font-size: 14px;
    margin-top: 6px;
    margin-bottom:20px;
}
;
`;
