import React from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Api from  "./components/api.jsx"



function App() {
  return (
    <div className="App">

      <Navbar />
      <Api/>

    </div>
  );
}

export default App;
