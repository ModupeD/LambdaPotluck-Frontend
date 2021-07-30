import React from "react";
import Potluck from "./Potluck";
import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";

const StyledPotlucks= styled.div`
display: grid;
grid-template-columns: auto auto auto;
margin: 5%;
`

const ListPotlucks = ({potlucks}) => {
    return (
        <StyledPotlucks>
            {potlucks.map(potluck=>(
                <Link key={potluck.id} to={`/potluck/${potluck.id}`}><Potluck data={potluck}/></Link>
            ))}            
        </StyledPotlucks>
    );
};

export default ListPotlucks;
