import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import { fetchImmuneCrewMates } from "../utils/FetchImmuneCrewMates";
import EditIcon from "@mui/icons-material/Edit";
import Link from "@mui/material/Link";
import { Outlet } from "react-router-dom";
import AntigenSpecificityChart from "../visualizations/AntigenSpecificityChart";
import CellTypeChart from "../visualizations/CellTypeChart";
import EffectorFunctionsChart from "../visualizations/EffectorFunctionsChart";
import CircularProgress from "@mui/material/CircularProgress";

const ImmuneCrewMatesGallery = () => {
  const theme = useTheme();
  const [immuneCrewMates, setImmuneCrewMates] = useState([]);

  useEffect(() => {
    fetchImmuneCrewMates().then((data) => {
      setImmuneCrewMates(data);
    });
  }, []);

  return (
    <>
      {immuneCrewMates.length > 0 ? (
        <>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
            }}
          >
            Your ImmuneCrewMates Gallery
            <Typography
              style={{
                color: theme.palette.text.secondary,
                textAlign: "center",
                padding: "1rem",
              }}
            >
              Explore your ImmuneCrewMates and learn more about them. Check our
              your ImmuneCrewMates' stats and see how they compare to other
              ImmuneCrewMates.
            </Typography>
          </Typography>
          <Grid item xs={8}>
            <ImageList
              sx={{
                width: "90vw",
                height: "80vh",
              }}
            >
              <ImageListItem
                key="Subheader"
                cols={2}
                sx={{
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                }}
              >
                <ListSubheader
                  component="div"
                  sx={{
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#81c784",
                    fontSize: "1rem",
                    padding: "0.1rem",
                  }}
                >
                  ImmuneCrewMates Gallery
                </ListSubheader>
              </ImageListItem>
              {immuneCrewMates.map((crewMate) => (
                <ImageListItem
                  key={crewMate.id}
                  sx={{
                    textAlign: "left",
                    color: "#fff",
                    backgroundColor: "#81c784",
                    fontSize: "1rem",
                    padding: "0.1rem",
                    border: "1px solid #81c784",
                    boxShadow: "3px 3px 3px 0.5px #6fbf73",
                    margin: "0.5rem",
                  }}
                >
                  <img
                    src={`/src/assets/images/facts/human-body.webp?w=20&fit=crop&auto=format`}
                    srcSet={`/src/assets/images/facts/human-body.webp?w=20&fit=crop&auto=format&dpr=2 2x`}
                    alt={crewMate.Name}
                    loading="eager"
                  />
                  <ImageListItemBar
                    title={`Name: ${crewMate.Name}`}
                    subtitle={
                      <>
                        <ListItemText
                          primary={`Cell Type: ${crewMate["Cell Type"]}`}
                        />
                        <ListItemText
                          primary={`Effector Functions: ${crewMate["Effector Functions"]}`}
                        />
                        <ListItemText
                          primary={`Antigen Specificity: ${crewMate["Antigen Specificity"]}`}
                        />
                        <ListItemText
                          primary={`Half-life: ${crewMate["Half-life"]}`}
                        />
                        <ListItemText
                          primary={`Affinity: ${crewMate["Affinity"]}`}
                        />
                      </>
                    }
                    actionIcon={
                      <Link href={`/gallery/${crewMate.id}`}>
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${crewMate.Name}`}
                        >
                          <EditIcon
                            sx={{
                              borderColor: "#81c784",
                              width: "2rem",
                              height: "2rem",
                              padding: "0.5rem",
                              borderRadius: "50%",
                              backgroundColor: "#fff",
                              textTransform: "none",
                              color: "#28a745",
                              "&:hover": {
                                backgroundColor: "#28a745",
                                color: "#fff",
                              },
                            }}
                          />
                        </IconButton>
                      </Link>
                    }
                  ></ImageListItemBar>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "1rem",
                margin: "auto",
              }}
            >
              <AntigenSpecificityChart />
              <CellTypeChart />
              <EffectorFunctionsChart />
            </Grid>
          </Grid>
          <Outlet />
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default ImmuneCrewMatesGallery;
