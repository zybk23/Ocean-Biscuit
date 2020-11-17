import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Screens/Home/index";
import Contact2 from "./Screens/Contact/Contact"
import Products from "./Screens/Products/Products";
import Navigation from "./Navigation/index";

function App() {
  return (
    <div >
      <Navigation />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/products"} exact component={Products} />
        <Route path={"/contact"} exact component={Contact2} />
      </Switch>
    </div>
  );
}

export default App;
