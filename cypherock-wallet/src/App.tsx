import React from "react";
import LeftBar from "./components/LeftBar/LeftBar";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LeftBar />} />
      </Routes>
    </Router>
  );
}

export default App;
