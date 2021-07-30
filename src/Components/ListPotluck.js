import React from "react";
import Potluck from "./Potluck";
import {Link, useHistory} from "react-router-dom";


const ListPotlucks = ({potlucks}) => {
    return (
        <div>
            {potlucks.map(potluck=>(
                <Link key={potluck.id} to={`/potluck/${potluck.id}`}><Potluck data={potluck}/></Link>
            ))}
        </div>
    );
};

export default ListPotlucks;
