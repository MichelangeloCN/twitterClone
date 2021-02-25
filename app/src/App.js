import React from "react";
import "./App.css";
import Header from "./Components/Header";
import InteractionBar from "./Components/InteractionBar";
// import Messages from "./Components/Messages";
import MobileNavBar from "./Components/MobileNavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <InteractionBar />
      <MobileNavBar />
    </div>
  );
}

export default App;
