import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";

function App() {
  const formSub = (data) => {
    console.log(data);
  };
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home formSub={formSub} />
        </Route>
        <Route path="/favourite">
          <Favourite />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
