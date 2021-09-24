import React from "react";
import "./styes/potluck.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  background-color: rgb(248, 197, 168);
  color: white;
  margin: 2% 10%;
  width: 70%;
`;
const StyledList = styled.div`
  text-align: left;
  color: whitesmoke;
  padding: 10%;
`;

const Potluck = ({ data }) => {
  return (
    <StyledDiv>
      <StyledList>
        <p>Title: {data.title}</p>
        <p>Date: {data.date}</p>
        <p>Time: {data.time}</p>
        <p>Location: {data.location}</p>
      </StyledList>
    </StyledDiv>
  );
};

export default Potluck;
