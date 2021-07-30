import React, {useEffect, useState} from "react";
import ListPotlucks from "./ListPotluck";
import CreatePotluck from "./CreatePotlucks";
import {listPotlucks} from "../Backend/api";

import {Switch,Route} from 'react-router-dom';
import PotluckDetails from "./PotluckDetails";

const PotluckPage = () => {

    const [potlucks, setPotlucks] = useState([]);

    const loadPotlucks = () => {
        const result = listPotlucks();
        setPotlucks(result);
    }

    useEffect(()=>{
        loadPotlucks();
    }, []);
    return (
        <Switch>
            <Route path="/" exact>
                <ListPotlucks potlucks={potlucks}/>
                <CreatePotluck handleCreate={loadPotlucks}/>
            </Route>
            <Route path="/potluck/:id" exact>
                <PotluckDetails handleModify={loadPotlucks}/>
            </Route>
        </Switch>
    );
};

export default PotluckPage;
