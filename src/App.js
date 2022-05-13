import './App.css';
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Pages/Homepage/Homepage";
import Appearance from "./Pages/Appearance/Appearance";
import Powerstats from "./Pages/Powerstats/Powerstats";
import Characters from "./Pages/Characters/Characters";
import CharacterBiography from "./Pages/CharacterBiography/CharacterBiography";


function App() {
  return (
      <div>
          <Navigation/>
          <Switch>
              <Route exact path="/">
                  <HomePage/>
              </Route>
          </Switch>
          <Switch>
              <Route exact path="/appearance">
                  <Appearance/>
              </Route>
          </Switch>
          <Switch>
              <Route exact path="/powerstats">
                  <Powerstats/>
              </Route>
          </Switch>
          <Switch>
              <Route exact path="/characters">
                  <Characters/>
              </Route>
          </Switch>
          <Switch>
              <Route exact path="/character-biography">
                  <CharacterBiography/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
