import { supabase } from "../config/supabaseClient";

const fetchEffectorFunctionsData = async () => {
  const { data: effectorFunctionsCols, error } = await supabase
    .from("ImmuneCrewMates")
    .select('"Effector Functions"');

  if (error) {
    console.log(error);
  }

  let effectorFunctionsData = {};

  effectorFunctionsCols.forEach((data) => {
    effectorFunctionsData[data["Effector Functions"]] =
      effectorFunctionsData[data["Effector Functions"]] + 1 || 1;
  });

  const effectorFunctionsDataArray = Object.entries(effectorFunctionsData).map(
    ([label, value]) => ({ label, value })
  );

  return effectorFunctionsDataArray;
};

const fetchCellTypesData = async () => {
  const { data: cellTypesCols, error } = await supabase
    .from("ImmuneCrewMates")
    .select('"Cell Type"');

  if (error) {
    console.log(error);
  }

  let cellTypesData = {};

  cellTypesCols.forEach((data) => {
    cellTypesData[data["Cell Type"]] =
      cellTypesData[data["Cell Type"]] + 1 || 1;
  });

  const cellTypesDataArray = Object.entries(cellTypesData).map(
    ([label, value]) => ({ label, value })
  );

  return cellTypesDataArray;
};

const fetchAntigenSpecificityData = async () => {
  const { data: antigenSpecificityCols, error } = await supabase
    .from("ImmuneCrewMates")
    .select('"Antigen Specificity"');

  if (error) {
    console.log(error);
  }

  let antigenSpecificityData = {};

  antigenSpecificityCols.forEach((data) => {
    antigenSpecificityData[data["Antigen Specificity"]] =
      antigenSpecificityData[data["Antigen Specificity"]] + 1 || 1;
  });

  const antigenSpecificityDataArray = Object.entries(
    antigenSpecificityData
  ).map(([label, value]) => ({ label, value }));

  return antigenSpecificityDataArray;
};

export {
  fetchEffectorFunctionsData,
  fetchCellTypesData,
  fetchAntigenSpecificityData,
};
