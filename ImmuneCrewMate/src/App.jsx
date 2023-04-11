import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideNav from "./components/SideNav";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/mainContent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <MainContent />
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
