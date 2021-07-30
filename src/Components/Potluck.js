import React from "react";
import styled from "styled-components";

const StyledDiv= styled.div`
    border: 1px solid black;
    background-color: grey;
    margin: 2% 10%;
    width: 70%;
`
const StyledList= styled.div`
  text-align: left;
  padding: 10%;
`

const Potluck = ({data}) => {
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