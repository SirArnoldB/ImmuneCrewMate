import React from "react";
import Box from "@mui/material/Box";
import DrawerHeader from "./DrawerHeader";
import Home from "../routes/Home";
import NewImmuneCrewMate from "../routes/NewImmuneCrewMate";
import ImmuneCrewMatesGallery from "../routes/ImmuneCrewMatesGallery";
import ImmuneCrewMateDetails from "../routes/ImmuneCrewMateDetails";
import UpdateImmuneCrewMate from "../routes/UpdateImmuneCrewMate";

import Confirmation from "../routes/Confirmation";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewImmuneCrewMate />} />
        <Route path="/confirmation/:crudOperation" element={<Confirmation />} />
        <Route path="/gallery">
          <Route index element={<ImmuneCrewMatesGallery />} />
          <Route path=":crewMateId">
            <Route index element={<ImmuneCrewMateDetails />} />
            <Route path="edit" element={<UpdateImmuneCrewMate />} />
            <Route path=":crudOperation" element={<Confirmation />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
};

export default MainContent;
