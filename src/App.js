import './App.css';
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Pages/Homepage/Homepage";
import Appearance from "./Pages/Appearance/Appearance";
import Characters from "./Pages/Characters/Characters";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
      <div>
          <Navigation/>
          <Switch>
              <Route exact path="/">
                  <HomePage/>
              </Route>
              <Route exact path="/appearance">
                  <Appearance/>
              </Route>
              <Route exact path="/characters">
                  <Characters/>
              </Route>
              <Route exact path="/login">
                  <Login/>
              </Route>
              <Route exact path="/register">
                  <Register/>
              </Route>
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
