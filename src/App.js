import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";
import EditNinja from "./components/EditNinja";
import Header from "./components/Header";

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
        path="/addNinja" component={AddNinja} 
      />
      <Route
        exact
        path="/editNinja/:id" component={EditNinja} 
      />
    </div>
  );
}

export default App;
