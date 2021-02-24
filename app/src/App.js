import React from "react";
import "./App.css";
import ExampleComponent from "./Components/ExampleComponent";
import InteractionBar from './Components/InteractionBar';

function App() {
  return (
    <div className="App">
      <ExampleComponent />
      <i className="ri-notification-3-line" />
      <InteractionBar />
    </div>
  );
}

export default App;

