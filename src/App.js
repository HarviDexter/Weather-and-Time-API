import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Weather from "./components/Weather/Weather";
import Main from "./components/main/Main";
import Time from "./components/time/Time";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/time" element={<Time />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
