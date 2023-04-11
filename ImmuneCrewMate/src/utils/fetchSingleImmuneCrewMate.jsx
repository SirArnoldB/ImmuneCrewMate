import { supabase } from "../config/supabaseClient";

const fetchSingleImmuneCrewMate = async (crewMateId) => {
  const { data: ImmuneCrewMate, error } = await supabase
    .from("ImmuneCrewMates")
    .select("*")
    .eq("id", crewMateId);

  if (error) {
    console.log(error);
  }
  return ImmuneCrewMate;
};

export { fetchSingleImmuneCrewMate };
