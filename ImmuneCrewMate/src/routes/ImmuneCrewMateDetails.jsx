import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { fetchSingleImmuneCrewMate } from "../utils/fetchSingleImmuneCrewMate";
import { Grid } from "@mui/material";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const ImmuneCrewMateDetails = () => {
  const { crewMateId } = useParams();
  const [crewMate, setCrewMate] = useState({});

  useEffect(() => {
    fetchSingleImmuneCrewMate(parseInt(crewMateId, 10)).then((data) => {
      setCrewMate(data[0]);
    });
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "70%",
        margin: "5rem auto",
      }}
    >
      <Card
        sx={{
          width: 700,
          height: 900,
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <CardHeader
          sx={{
            backgroundColor: "#d6f5d6",
            border: "1px solid #28a745",
            textAlign: "left",
          }}
          avatar={
            <Avatar sx={{ bgcolor: green[500] }} aria-label="Fact">
              <GroupWorkIcon />
            </Avatar>
          }
          title={crewMate.Name}
        />
        <CardMedia
          sx={{
            height: 345,
            width: 345,
            objectFit: "contain",
            display: "inline",
          }}
          image={`/src/assets/images/facts/human-body.webp`}
          title={`Immune Crew Mate: ${crewMate.Name}`}
          component={"img"}
        />
        <CardContent
          sx={{
            display: "grid",
          }}
        >
          <Chip
            label={`Attributes`}
            variant="outlined"
            sx={{
              backgroundColor: "#28a745",
              color: "#d6f5d6",
              "&:hover": {
                backgroundColor: "#28a745",
                color: "#fff",
              },
            }}
          />
          <List>
            <ListItem>
              <ListItemText
                primary={`Antigen Specificity: ${crewMate["Antigen Specificity"]}`}
              />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary={`Subclass: ${crewMate.Subclass}`} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText
                primary={`Effector Functions: ${crewMate["Effector Functions"]}`}
              />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary={`Affinity: ${crewMate.Affinity}`} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary={`Epitope: ${crewMate.Epitope}`} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary={`Half-life: ${crewMate["Half-life"]}`} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemText primary={`Cell Type: ${crewMate["Cell Type"]}`} />
            </ListItem>
          </List>
        </CardContent>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href={`/gallery/${crewMate.id}/edit`} underline="none">
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#81c784",
                  textTransform: "none",
                  color: "#232323",
                  "&:hover": {
                    backgroundColor: "#28a745",
                    color: "#fff",
                  },
                }}
              >
                {`Edit ${crewMate.Name}`}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ImmuneCrewMateDetails;
