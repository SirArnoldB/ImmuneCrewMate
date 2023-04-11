import React from "react";
import Stack from "@mui/material/Stack";
import PoemCard from "./PoemCard";
import InfoCard from "./InfoCard";
import { immuneSystemFactOne, immuneSystemFactTwo } from "./ImmuneSystemFacts";
import Box from "@mui/material/Box";

const StackedHomeCards = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        padding={{ xs: 1, sm: 2, md: 4 }}
      >
        <InfoCard immuneSystenFact={immuneSystemFactOne} />
        <PoemCard />
        <InfoCard immuneSystenFact={immuneSystemFactTwo} />
      </Stack>
    </Box>
  );
};

export default StackedHomeCards;
