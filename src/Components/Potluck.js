import React from "react";

const Potluck = ({data}) => {
    return (
        <div className="potluck">
            <ul>
                <li>Title: {data.title}</li>
                <li>Date: {data.date}</li>
                <li>Time: {data.time}</li>
                <li>Location: {data.location}</li>
            </ul>
        </div>
    );
};

export default Potluck;