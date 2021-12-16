import React from "react";
import MenuPaises from "./MenuPaises";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PaisesList from "./Paises";
import PageNotFound from "./PageNotFound";
import Continentes from "./Continentes";
import { BrowserRouter } from "react-router-dom";

const SwitchMenu = () => {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <MenuPaises />
          <Switch name="menu" path="/">
            <Route exact path="/" component={Home} />
            <Route exact path="/paises" component={PaisesList} />
            <Route exact path="/continentes" component={Continentes} />
            <Route exact path="" component={PageNotFound} />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
};
export default SwitchMenu;
