import React, { useState } from "react";
import {createPotluck} from '../Backend/api';

const CreatePotluck = ({handleCreate}) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const makePotluck = (event) => {
        event.preventDefault();
        createPotluck({
            id: Date.now(),
            title,
            date,
            time,
            location
        });
        handleCreate();
    }

    return (
        <div>
            <form onSubmit={makePotluck}>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Potluck Name"/>
                <input type="text" value={date} onChange={e=>setDate(e.target.value)} placeholder="Potluck Date"/>
                <input type="text" value={time} onChange={e=>setTime(e.target.value)} placeholder="Potluck Time"/>
                <input type="text" value={location} onChange={e=>setLocation(e.target.value)} placeholder="Potluck Location"/>

                <input type="submit" value="Create a Potluck"/>
            </form>
        </div>
    );
};

export default CreatePotluck;