import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";
import EditNinja from "./components/EditNinja";
import Header from "./components/Header";
import NinjasRedux from "./components/NinjasRedux";
import AddNinjaRedux from "./components/NinjasRedux";
import EditNinjaRedux from "./components/NinjasRedux";

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        exact
        path="/" component={Ninjas} 
      />
      <Route
        exact
        path="/ninjasRedux" component={NinjasRedux} 
      />
      <Route
        exact
        path="/addNinja" component={AddNinja} 
      />
      <Route
        exact
        path="/addNinjaRedux" component={AddNinjaRedux} 
      />
      <Route
        exact
        path="/editNinja/:id" component={EditNinja} 
      />
      <Route
        exact
        path="/editNinjaRedux/:id" component={EditNinjaRedux} 
      />
    </div>
  );
}

export default App;
