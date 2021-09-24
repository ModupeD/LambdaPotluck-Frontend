import React, { useState } from "react";
import { editPotluck, getPotluck, listPotlucks } from "../Backend/api";
import "./styes/potluckDetails.css";
import { Link, useParams } from "react-router-dom";
import Guest from "./Guest";
import styled from "styled-components";
const PotluckDetails = ({ handleModify }) => {
  const { id } = useParams();
  const data = getPotluck(id);

  const [title, setTitle] = useState(data.title);
  const [date, setDate] = useState(data.date);
  const [time, setTime] = useState(data.time);
  const [location, setLocation] = useState(data.location);
  const [food, setFood] = useState(data.food || []);
  const [guests, setGuests] = useState(data.guests || []);

  const [foodToAdd, setFoodToAdd] = useState("");
  const [guestToAdd, setGuestToAdd] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const modifyPotluck = (event) => {
    event.preventDefault();
    savePotluckDetails({
      id: data.id,
      title,
      date,
      time,
      location,
      food,
      guests,
    });
  };

  const savePotluckDetails = (potluck) => {
    console.log("GUESTS TO SAVE", guests);
    editPotluck(potluck);
    handleModify();
    setStatusMessage("Modified Successfully");
  };

  const addFood = (event) => {
    event.preventDefault();
    setFood([...food, foodToAdd]);
    setFoodToAdd("");
    savePotluckDetails({
      id: data.id,
      title,
      date,
      time,
      location,
      food: [...food, foodToAdd],
      guests,
    });
  };

  const addGuest = (event) => {
    event.preventDefault();
    const v = {
      id: Date.now(),
      name: guestToAdd,
      confirmed: "no",
      food: "",
    };
    setGuests([...guests, v]);
    setGuestToAdd("");
    console.log("saving", guestToAdd);
    savePotluckDetails({
      id: data.id,
      title,
      date,
      time,
      location,
      food,
      guests: [...guests, [...guests, v]],
    });
  };

  const removeGuest = (guestItem) => {
    setGuests(guests.filter((f) => f.id !== guestItem));
    savePotluckDetails({
      id: data.id,
      title,
      date,
      time,
      location,
      food,
      guests: guests.filter((f) => f.id !== guestItem),
    });
  };

  const removeFood = (foodItem) => {
    setFood(food.filter((f) => f !== foodItem));
    savePotluckDetails({
      id: data.id,
      title,
      date,
      time,
      location,
      food: food.filter((f) => f !== foodItem),
      guests,
    });
  };

  const handleGuestUpdate = (guestDetails) => {
    const newGuestsList = guests.map((p) => {
      return p.id === guestDetails.id ? guestDetails : p;
    });
    savePotluckDetails({
      id: data.id,
      title,
      date,
      time,
      location,
      food,
      guests: newGuestsList,
    });
  };

  const StyledDetails = styled.div`
    padding: 10%;
  `;
  const BackButton = styled.button`
    text-decoration: none;
    background-color: ghostwhite;
    padding: 1%;
  `;
  return (
    <div>
      <StyledDetails>
        <Link to="/">
          <BackButton>Go Back</BackButton>
        </Link>

        <p>{statusMessage}</p>

        <h1>Potluck Details for: {title}</h1>
        <form onSubmit={modifyPotluck}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Potluck Name"
          />
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Potluck Date"
          />
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Potluck Time"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Potluck Location"
          />

          <input type="submit" value="Modify Potluck" />
        </form>

        <h1>Food We Want</h1>
        <form onSubmit={addFood}>
          <input
            type="text"
            value={foodToAdd}
            onChange={(e) => setFoodToAdd(e.target.value)}
            placeholder="Food To Add"
          />
          <input type="submit" value="Add Food" />
        </form>
        <ul>
          {food.map((f) => (
            <li key={f}>
              {f} <span onClick={(e) => removeFood(f)}>X</span>
            </li>
          ))}
        </ul>

        <h1>Guests</h1>
        <form onSubmit={addGuest}>
          <input
            type="text"
            value={guestToAdd}
            onChange={(e) => setGuestToAdd(e.target.value)}
            placeholder="Guest To Add"
          />
          <input type="submit" value="Add Guest" />
        </form>

        {guests.map((f) => (
          <Guest
            key={f.id}
            data={f}
            handleRemove={removeGuest}
            handleUpdate={handleGuestUpdate}
          />
        ))}
      </StyledDetails>
    </div>
  );
};

export default PotluckDetails;
