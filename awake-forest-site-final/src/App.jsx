import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./routes/Test";
import Homepage from "./routes/Homepage";
import About from "./routes/About";


function Apps() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Apps;
