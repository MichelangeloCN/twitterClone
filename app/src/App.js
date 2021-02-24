import React from "react";
import "./App.css";
import ExampleComponent from "./Components/ExampleComponent";
import Header from "./Components/Header";
import InteractionBar from "./Components/InteractionBar";
import Messages from "./Components/Messages";
import MobileNavBar from "./Components/MobileNavBar";

function App() {
  return (
    <div className="App">
      <ExampleComponent />
      <Header />
      <i className="ri-notification-3-line" />
      <InteractionBar />
      <Messages />
      <MobileNavBar />
    </div>
  );
}

export default App;
