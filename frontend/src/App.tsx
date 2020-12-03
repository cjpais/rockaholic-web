import React from 'react';
import './App.css';
import { Sidebar } from "./Sidebar"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import printer from "./printer.svg"

import { Gyms } from "./components/gym/Gym"
import { Walls } from "./components/gym/GymWall"
import { Ropes } from "./components/gym/GymRope"
import { Setters } from "./components/gym/GymSetter"
import { Routes } from "./components/gym/GymRoute"
import { QRComparison } from "./components/gym/QRComparison"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const client = new ApolloClient({
  uri: 'https://direct-grouse-50.hasura.app/v1/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Sidebar />

          <div className="Header">
            <button>
              {/* TODO show little notificaiton thingy? */}
              <img style={{backgroundColor: "transparent"}} src={printer} alt="printer" height="32px"></img>
            </button>
          </div>

          <div className="Body">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/gyms">
                <Gyms />
              </Route>
              <Route path="/walls">
                <Walls id={2}/>
              </Route>
              <Route path="/ropes">
                <Ropes id={2}/>
              </Route>
              <Route path="/setters">
                <Setters />
              </Route>
              <Route path="/routes">
                <Routes id={2}/>
              </Route>
              <Route path="/qr">
                <QRComparison />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

function Dashboard() {
  return <h1>Dashboard</h1>
}

export default App;


