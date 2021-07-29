import logo from "./logo.svg";
import "./App.css";
import ListPotlucks from "./Components/ListPotluck";
import CreatePotluck from "./Components/CreatePotlucks";
import PotluckPage from "./Components/PotluckPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Potluck Time
      </header>
      <div>
        <ul>
          <li>As an `organizer` I can create an upcoming `potluck` and invite my friends to attend</li>

          <li>As an `organizer` I can adjust `date`s, `time`s and `location`s of the potluck</li>

          <li>As an `organizer` I can use the list feature in my app to add food `items` that we'd like to see at the potluck</li>

          <li>4. As a `guest` to a potluck I want to be able to confirm that I'm going to the upcoming `event`</li>

          <li>5. As a `guest` I'd like to be able to select which `item`s I'd like to be responsible for bringing</li>
        </ul>
      </div>
        <div>
            <PotluckPage/>
        </div>
    </div>
  );
}

export default App;
