import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { Container } from "../components/content";
import { MoviesList, MoviesInsert, MoviesUpdate, Home } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/poll/list" exact component={MoviesList} />
          <Route path="/poll/create" exact component={MoviesInsert} />
          <Route path="/poll/update/:id" exact component={MoviesUpdate} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
