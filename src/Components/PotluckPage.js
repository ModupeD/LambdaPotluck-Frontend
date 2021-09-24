import React, { useEffect, useState } from "react";
import ListPotlucks from "./ListPotluck";
import CreatePotluck from "./CreatePotlucks";
import { listPotlucks } from "../Backend/api";
import img from "../image/Yellow and Black Photo Food YouTube Channel Art.png";
import { Switch, Route } from "react-router-dom";
import PotluckDetails from "./PotluckDetails";
import styled from "styled-components";

const PotluckPage = () => {
  const [potlucks, setPotlucks] = useState([]);

  const loadPotlucks = () => {
    const result = listPotlucks();
    setPotlucks(result);
  };

  const StyledForm = styled.div`
    /* display: flex; */
  `;
  const Background = styled.div`
    background-image: url(${img});
    height: 100%;
    background-position: center;
    background-size: cover;
  `;
  useEffect(() => {
    loadPotlucks();
  }, []);
  return (
    <Background>
      <Switch>
        <Route path="/" exact>
          <StyledForm>
            <CreatePotluck handleCreate={loadPotlucks} />
          </StyledForm>
          <ListPotlucks potlucks={potlucks} />
        </Route>
        <Route path="/potluck/:id" exact>
          <PotluckDetails handleModify={loadPotlucks} />
        </Route>
      </Switch>
    </Background>
  );
};

export default PotluckPage;
