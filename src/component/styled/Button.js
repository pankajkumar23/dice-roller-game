import styled from "styled-components";

export const Button = styled.button`
  min-width: 220px;
  cursor: pointer;

  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 13px;
 

  transition: 1s;
  border: 1px solid white;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
background-color: white;
border:1px solid black ;
color: black ;
 &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;

    transition: 0.8s;
  }

`;
