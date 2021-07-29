import React, {useState} from "react";

const Guest = ({data, handleUpdate, handleRemove}) => {

    const [name, setName] = useState(data.name);
    const [confirmed, setConfirmed] = useState(data.confirmed);
    const [food, setFood] = useState(data.food);

    const handleGuestUpdate = (event) => {
        event.preventDefault();
        handleUpdate({
            id: data.id,
            name,
            confirmed,
            food
        });
    }
    return (
        <div className="guest">
            <form onSubmit={handleGuestUpdate}>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Guest Name"/>
<input type="text" value={confirmed} onChange={e=>setConfirmed(e.target.value)} placeholder="Confirmed"/>
<input type="text" value={food} onChange={e=>setFood(e.target.value)} placeholder="Food"/>

                <input type="submit" value="Modify Guest"/>
                <button onClick={e=>handleRemove(data.id)}>Remove Guest</button>
            </form>
        </div>
    );
};

export default Guest;