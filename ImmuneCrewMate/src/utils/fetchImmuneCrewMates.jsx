import React from "react";
import { supabase } from "../config/supabaseClient";

const fetchImmuneCrewMates = async () => {
  const { data: ImmuneCrewMates, error } = await supabase
    .from("ImmuneCrewMates")
    .select("*");

  if (error) {
    console.log(error);
  }
  return ImmuneCrewMates;
};

export { fetchImmuneCrewMates };
