import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import IniciarSesion from "./auth/IniciarSesion";
import Registro from "./auth/Registro";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={IniciarSesion} />
          <Route exact path="/iniciarSesion" component={IniciarSesion} />
          <Route exact path="/registrarse" component={Registro} />
          <Route exact path="" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
