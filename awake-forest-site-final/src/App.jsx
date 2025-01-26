import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./routes/Test";
import Homepage from "./routes/Homepage";
import About from "./routes/About";
import Schedule from "./routes/Schedule";
import Contact from "./routes/Contact";
import Resources from "./routes/Resources";


function Apps() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}

export default Apps;
