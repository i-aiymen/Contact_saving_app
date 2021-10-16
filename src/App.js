import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const formSub = (data) => {
    //console.log(data);
    setContacts([...contacts, data]);
  };

  const deleteContact = (id) => {

      let newContact = contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContact);
  };

  
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home formSub={formSub} contacts={contacts} deleteContact={deleteContact}/>
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
