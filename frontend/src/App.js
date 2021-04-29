import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
// import MusicPlayer from "./components/MusicPlayer";
import SongPage from "./components/SongPage";
import User from "./components/Users";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Splash isLoaded={isLoaded} />
          </Route>
          <Route path="/dashboard">
            <Dashboard isLoaded={isLoaded} />
          </Route>
          <Route path="/users/:id" exact={true}>
            <User isLoaded={isLoaded} />
          </Route>
          <Route path="/upload" exact={true}>
            <Upload isLoaded={isLoaded} />
          </Route>
          <Route
            path="/song/:id"
            component={(props) => <SongPage isLoaded={isLoaded} {...props} />}
          ></Route>
        </Switch>
      )}
    </>
  );
}

export default App;
