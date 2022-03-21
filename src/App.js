import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Pages/Homepage/Homepage";
import Appearance from "./Pages/Appearance/Appearance";
import Powerstats from "./Pages/Powerstats/Powerstats";
import Characters from "./Pages/Characters/Characters";

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
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
