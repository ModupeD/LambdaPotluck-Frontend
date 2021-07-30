import logo from "./logo.svg";
import "./App.css";
import ListPotlucks from "./Components/ListPotluck";
import CreatePotluck from "./Components/CreatePotlucks";
import PotluckPage from "./Components/PotluckPage";
import React from "react";


function App() {

  return (
               
    <div className="App">
      <header className="App-header">
          Potluck Time
      </header>
            <PotluckPage/> 
    </div>
        
  );
}

export default App;
