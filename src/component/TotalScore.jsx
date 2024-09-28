import React from 'react'
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
    <ScoreContainer className='counter'>
            <h1>
                {score}
            </h1>
            <p>
                Total Score
            </p>
            </ScoreContainer>
        
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width:150px;
text-align: center;
    h1{
        font-size: 60px;
        line-height: 80px;

    }
    p{ 
        font-size: 18px;
        font-weight:500;
       
        
    }
`