import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Configure from "./pages/Configure";
import * as msTeams from "@microsoft/teams-js";

function App() {
  msTeams.initialize();
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/configure" element={<Configure />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
