import './App.css';
import {Switch, Route} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Pages/Homepage/Homepage";
import Appearance from "./Pages/Appearance/Appearance";
import Characters from "./Pages/Characters/Characters";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// import {useContext} from "react";
// import NoAccessPrivateRoute from "./Pages/NoAccessPrivateRoute/NoAccessPrivateRoute";

function App() {
    // const {isAuth} = useContext();
  return (
      <div>
          <Navigation/>
          <Switch>
              <Route exact path="/">
                  <HomePage/>
              </Route>
              <Route path="/appearance">
                  {/*{ isAuth ? <Appearance/> : <NoAccessPrivateRoute/>}*/}
                  <Appearance/>
              </Route>
              <Route path="/characters">
                  <Characters/>
              </Route>
              <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/register">
                  <Register/>
              </Route>
          </Switch>
          <Footer/>
      </div>
  );
}

export default App;
