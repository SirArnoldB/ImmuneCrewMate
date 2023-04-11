import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const stanzaOne = `Tiny warriors, brave and strong,
In blood and tissues they belong.
Patrolling all day and all night,
Fighting invaders with all their might.`;

const stanzaTwo = `Antibodies, T-cells, and more,
A team that's ready to explore.
Seek and destroy, they never rest,
To keep our bodies at their best.`;

const stanzaThree = `Invisible foes they can detect,
And with precision, they can deflect.
Their battles won't be known to us,
But their victories are a must.`;

const stanzaFour = `So let's honor these defenders true,
Our body's guardians, through and through.
They fight for us without a sound,
Our immune system's heroes, profound.`;

const PoemCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#d6f5d6",
        padding: "20px",
        margin: "20px",
        border: "1px solid #28a745",
        width: 345,
        height: 500,
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          color="#28a745"
          gutterBottom
        >
          Soldiers of the Immune System
        </Typography>
        <Typography
          sx={{ fontSize: 15, fontFamily: "fantasy", textAlign: "center" }}
          variant="body1"
        >
          {stanzaOne}
        </Typography>
        <Typography
          sx={{ fontSize: 15, fontFamily: "fantasy", textAlign: "center" }}
          variant="body2"
        >
          {stanzaTwo}
        </Typography>
        <Typography
          sx={{ fontSize: 15, fontFamily: "fantasy", textAlign: "center" }}
          variant="body3"
        >
          {stanzaThree}
        </Typography>
        <Typography
          sx={{ fontSize: 15, fontFamily: "fantasy", textAlign: "center" }}
          variant="body4"
        >
          {stanzaFour}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PoemCard;
