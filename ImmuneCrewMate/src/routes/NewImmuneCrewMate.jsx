import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  crewMateCellTypes,
  antigenTypes,
  subclassOptions,
  effectorFunctionsOptions,
  epitopeTypes,
} from "../utils/crewMateOptions";

const NewImmuneCrewMate = () => {
  const [name, setName] = useState("");
  const [antigenSpecificity, setAntigenSpecificity] = useState("");
  const [subclass, setSubclass] = useState("");
  const [effectorFunctions, setEffectorFunctions] = useState("");
  const [affinity, setAffinity] = useState("");
  const [epitope, setEpitope] = useState("");
  const [halfLife, setHalfLife] = useState("");
  const [cellType, setCellType] = useState("");
  const navigateTo = useNavigate();
  const [navigateToConfirmation, setNavigateToConfirmation] = useState(false);
  const [crudOperation, setCrudOperation] = useState("created");

  useEffect(() => {
    if (navigateToConfirmation) {
      navigateTo(`/confirmation/${crudOperation}`);
    }
  }, [navigateToConfirmation]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("ImmuneCrewMates").insert([
      {
        Name: name,
        "Antigen Specificity": antigenSpecificity,
        Subclass: subclass,
        "Effector Functions": effectorFunctions,
        Affinity: affinity,
        Epitope: epitope,
        "Half-life": halfLife,
        "Cell Type": cellType,
      },
    ]);

    if (error) {
      alert("Error creating new ImmuneCrewMate: ", error.message);
    } else {
      setNavigateToConfirmation(true);
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "70%",
        margin: "5rem auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Name"
              value={name}
              variant="filled"
              helperText="What is your antibody's name?"
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              select
              label="Antigen Specificity"
              value={antigenSpecificity}
              variant="filled"
              helperText="What does your antibody target?"
              onChange={(e) => setAntigenSpecificity(e.target.value)}
            >
              {antigenTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Subclass"
              value={subclass}
              select
              variant="filled"
              helperText="What subclass is your antibody?"
              onChange={(e) => setSubclass(e.target.value)}
            >
              {subclassOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Effector Functions"
              value={effectorFunctions}
              select
              variant="filled"
              helperText="What does your antibody do?"
              onChange={(e) => setEffectorFunctions(e.target.value)}
            >
              {effectorFunctionsOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              variant="filled"
              label="Affinity"
              type="number"
              value={affinity}
              helperText="How well does your antibody bind to its target?"
              onChange={(e) => setAffinity(e.target.value)}
              InputProps={{
                inputProps: {
                  min: 0,
                  max: 100,
                },
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              fullWidth
              variant="filled"
              label="Epitope"
              value={epitope}
              helperText="What part of the antigen does your antibody bind to?"
              onChange={(e) => setEpitope(e.target.value)}
            >
              {epitopeTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              variant="filled"
              type="number"
              label="Half-Life"
              value={halfLife}
              helperText="How long does your antibody last?"
              onChange={(e) => setHalfLife(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              select
              fullWidth
              variant="filled"
              label="Cell Type"
              value={cellType}
              helperText="What type of cell is your antibody?"
              onChange={(e) => setCellType(e.target.value)}
            >
              {crewMateCellTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
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
              Add Immune Crew Mate
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default NewImmuneCrewMate;
