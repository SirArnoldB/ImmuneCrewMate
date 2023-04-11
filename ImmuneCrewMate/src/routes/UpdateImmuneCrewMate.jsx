import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import { supabase } from "../config/supabaseClient";
import { fetchSingleImmuneCrewMate } from "../utils/fetchSingleImmuneCrewMate";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  crewMateCellTypes,
  antigenTypes,
  subclassOptions,
  effectorFunctionsOptions,
  epitopeTypes,
} from "../utils/crewMateOptions";

const UpdateImmuneCrewMate = () => {
  const [crewMate, setCrewMate] = useState(null);
  const { crewMateId } = useParams();
  const [crudOperation, setCrudOperation] = useState("");
  const navigateTo = useNavigate();
  const [navigateToConfirmation, setNavigateToConfirmation] = useState(false);
  const [columnsToUpdate, setColumnsToUpdate] = useState({});

  useEffect(() => {
    fetchSingleImmuneCrewMate(parseInt(crewMateId, 10)).then((data) => {
      setCrewMate(data[0]);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    if (navigateToConfirmation) {
      navigateTo(`/confirmation/${crudOperation}`);
    }
  }, [navigateToConfirmation]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (Object.keys(columnsToUpdate).length !== 0) {
      const { data, error } = await supabase
        .from("ImmuneCrewMates")
        .update([columnsToUpdate])
        .eq("id", crewMateId);

      if (error) {
        alert("Error creating new ImmuneCrewMate!");
      } else {
        setCrudOperation("updated");
        setNavigateToConfirmation(true);
      }
    } else {
      alert("You must update at least one field.");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("ImmuneCrewMates")
      .delete()
      .eq("id", crewMateId);

    if (error) {
      alert("Error deleting ImmuneCrewMate!");
    } else {
      setCrudOperation("deleted");
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
      {crewMate ? (
        <form onSubmit={handleUpdate}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Name"
                defaultValue={crewMate.Name}
                variant="filled"
                helperText="What is your antibody's name?"
                onChange={(e) =>
                  setColumnsToUpdate({
                    ...columnsToUpdate,
                    Name: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                select
                label="Antigen Specificity"
                defaultValue={crewMate["Antigen Specificity"]}
                variant="filled"
                helperText="What does your antibody target?"
                onChange={(e) =>
                  setColumnsToUpdate({
                    ...columnsToUpdate,
                    "Antigen Specificity": e.target.value,
                  })
                }
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
                defaultValue={crewMate.Subclass}
                select
                variant="filled"
                helperText="What subclass is your antibody?"
                onChange={(e) =>
                  setColumnsToUpdate({
                    ...columnsToUpdate,
                    Subclass: e.target.value,
                  })
                }
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
                variant="filled"
                defaultValue={crewMate["Effector Functions"]}
                select
                helperText="What does your antibody do?"
                onChange={(e) =>
                  setColumnsToUpdate({
                    ...columnsToUpdate,
                    "Effector Functions": e.target.value,
                  })
                }
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
                defaultValue={crewMate.Affinity}
                helperText="How well does your antibody bind to its target?"
                onChange={(e) =>
                  setColumnsToUpdate({
                    ...columnsToUpdate,
                    Affinity: e.target.value,
                  })
                }
                InputProps={{
                  inputProps: {
                    min: 0,
                    max: 100,
                  },
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
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
                defaultValue={crewMate.Epitope}
                helperText="What part of the antigen does your antibody bind to?"
                onChange={(e) =>
                  setColumnsToUpdate({
                    ...columnsToUpdate,
                    Epitope: e.target.value,
                  })
                }
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
                type="number"
                variant="filled"
                label="Half-Life"
                defaultValue={crewMate["Half-life"]}
                helperText="How long does your antibody last?"
                onChange={(e) =>
                  setColumnsToUpdate({
                    ...columnsToUpdate,
                    "Half-life": e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                select
                fullWidth
                variant="filled"
                label="Cell Type"
                defaultValue={crewMate["Cell Type"]}
                helperText="What type of cell is your antibody?"
                onChange={(e) =>
                  setColumnsToUpdate({
                    ...columnsToUpdate,
                    "Cell Type": e.target.value,
                  })
                }
              >
                {crewMateCellTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid
              container
              justifyContent="center"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ padding: "5rem" }}
            >
              <Grid item xs={6} sm={6} md={6}>
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
                  Update
                </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Button
                  onClick={handleDelete}
                  variant="outlined"
                  type="button"
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
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default UpdateImmuneCrewMate;
