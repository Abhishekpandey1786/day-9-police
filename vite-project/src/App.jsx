import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./assets/Homepage.jsx";
import PrivacyPolicy from "./assets/PrivacyPolicy.jsx";
import Terms from "./assets/Terms.jsx";
import Deleteaccount from "./assets/Deleteaccount.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/delete-account" element={<Deleteaccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;