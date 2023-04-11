const crewMateCellTypes = [
  { value: "Antibodie", label: "Antibodie" },
  { value: "T cell", label: "T cell" },
  { value: "B cell", label: "B cell" },
  { value: "Natural Killer cell", label: "Natural Killer cell" },
  { value: "Dendritic cell", label: "Dendritic cell" },
  { value: "Macrophage", label: "Macrophage" },
  { value: "Neutrophil", label: "Neutrophil" },
  { value: "Eosinophil", label: "Eosinophil" },
  { value: "Basophil", label: "Basophil" },
  { value: "Mast cell", label: "Mast cell" },
  { value: "Platelet", label: "Platelet" },
  { value: "Complement protein", label: "Complement protein" },
  { value: "Cytokine", label: "Cytokine" },
  { value: "Chemokine", label: "Chemokine" },
  { value: "Interferon", label: "Interferon" },
  { value: "Interleukin", label: "Interleukin" },
  { value: "Growth factor", label: "Growth factor" },
  { value: "Transcription factor", label: "Transcription factor" },
  { value: "Immunoglobulin", label: "Immunoglobulin" },
];

const antigenTypes = [
  { value: "Protein antigens", label: "Protein antigens" },
  { value: "Carbohydrate antigens", label: "Carbohydrate antigens" },
  { value: "Lipid antigens", label: "Lipid antigens" },
  { value: "Nucleic acid antigens", label: "Nucleic acid antigens" },
  { value: "Synthetic antigens", label: "Synthetic antigens" },
  { value: "Hapten antigens", label: "Hapten antigens" },
  { value: "Allergenic antigens", label: "Allergenic antigens" },
  { value: "Autoantigens", label: "Autoantigens" },
  {
    value: "Tumor-associated antigens",
    label: "Tumor-associated antigens",
  },
  { value: "Blood group antigens", label: "Blood group antigens" },
  { value: "Viral antigens", label: "Viral antigens" },
  { value: "Bacterial antigens", label: "Bacterial antigens" },
  { value: "Parasitic antigens", label: "Parasitic antigens" },
  { value: "Fungal antigens", label: "Fungal antigens" },
  { value: "Food antigens", label: "Food antigens" },
  { value: "Environmental antigens", label: "Environmental antigens" },
  { value: "Hormonal antigens", label: "Hormonal antigens" },
  { value: "Plant antigens", label: "Plant antigens" },
  { value: "Insect antigens", label: "Insect antigens" },
  { value: "Pollen antigens", label: "Pollen antigens" },
];

const subclassOptions = [
  { value: "IgM", label: "IgM" },
  { value: "IgG", label: "IgG" },
  { value: "IgA", label: "IgA" },
  { value: "IgD", label: "IgD" },
  { value: "IgE", label: "IgE" },
  { value: "Alpha", label: "Alpha" },
  { value: "Beta", label: "Beta" },
  { value: "Gamma", label: "Gamma" },
  { value: "Delta", label: "Delta" },
  { value: "Epsilon", label: "Epsilon" },
  { value: "Zeta", label: "Zeta" },
  { value: "Eta", label: "Eta" },
  { value: "Theta", label: "Theta" },
  { value: "Kappa", label: "Kappa" },
  { value: "Lambda", label: "Lambda" },
  { value: "Mu", label: "Mu" },
  { value: "Nu", label: "Nu" },
  { value: "Xi", label: "Xi" },
  { value: "Omicron", label: "Omicron" },
  { value: "Pi", label: "Pi" },
  { value: "Rho", label: "Rho" },
  { value: "Sigma", label: "Sigma" },
  { value: "Tau", label: "Tau" },
  { value: "Phi", label: "Phi" },
  { value: "Chi", label: "Chi" },
  { value: "Psi", label: "Psi" },
  { value: "Omega", label: "Omega" },
  { value: "CD4", label: "CD4" },
  { value: "CD8", label: "CD8" },
  { value: "Memory", label: "Memory" },
  { value: "Naive", label: "Naive" },
  { value: "Effector", label: "Effector" },
  { value: "Regulatory", label: "Regulatory" },
  { value: "Helper", label: "Helper" },
  { value: "Cytotoxic", label: "Cytotoxic" },
  { value: "Activated", label: "Activated" },
  { value: "Inactivated", label: "Inactivated" },
];

const effectorFunctionsOptions = [
  { value: "Cytotoxicity", label: "Cytotoxicity" },
  { value: "Opsonization", label: "Opsonization" },
  { value: "Neutralization", label: "Neutralization" },
  { value: "Complement activation", label: "Complement activation" },
  {
    value: "Antibody-dependent cellular cytotoxicity (ADCC)",
    label: "Antibody-dependent cellular cytotoxicity (ADCC)",
  },
  {
    value: "Antibody-dependent cellular phagocytosis (ADCP)",
    label: "Antibody-dependent cellular phagocytosis (ADCP)",
  },
  {
    value: "Delayed-type hypersensitivity (DTH)",
    label: "Delayed-type hypersensitivity (DTH)",
  },
  { value: "Activation of T cells", label: "Activation of T cells" },
  { value: "Inhibition of T cells", label: "Inhibition of T cells" },
  {
    value: "Antibody-dependent cell-mediated inhibition (ADCI)",
    label: "Antibody-dependent cell-mediated inhibition (ADCI)",
  },
  { value: "Antigen presentation", label: "Antigen presentation" },
  { value: "Inflammation", label: "Inflammation" },
  {
    value: "Regulation of immune response",
    label: "Regulation of immune response",
  },
  { value: "Immune complex formation", label: "Immune complex formation" },
  { value: "Tumor eradication", label: "Tumor eradication" },
  { value: "Migration of leukocytes", label: "Migration of leukocytes" },
  {
    value: "Activation of complement cascade",
    label: "Activation of complement cascade",
  },
  {
    value: "Inhibition of complement cascade",
    label: "Inhibition of complement cascade",
  },
  {
    value: "Regulation of inflammation",
    label: "Regulation of inflammation",
  },
  {
    value: "Regulation of antibody production",
    label: "Regulation of antibody production",
  },
];

const epitopeTypes = [
  { value: "Linear", label: "Linear" },
  { value: "Conformational", label: "Conformational" },
  { value: "Discontinuous", label: "Discontinuous" },
  { value: "B cell epitope", label: "B cell epitope" },
  { value: "T cell epitope", label: "T cell epitope" },
  { value: "Epitope tag", label: "Epitope tag" },
  { value: "Mimotope", label: "Mimotope" },
  { value: "Superantigen", label: "Superantigen" },
  { value: "Neoepitope", label: "Neoepitope" },
  { value: "Cryptotope", label: "Cryptotope" },
  { value: "Autoepitope", label: "Autoepitope" },
  { value: "Viral epitope", label: "Viral epitope" },
  { value: "Bacterial epitope", label: "Bacterial epitope" },
  { value: "Parasitic epitope", label: "Parasitic epitope" },
  { value: "Fungal epitope", label: "Fungal epitope" },
  { value: "Food epitope", label: "Food epitope" },
  { value: "Environmental epitope", label: "Environmental epitope" },
  { value: "Hormonal epitope", label: "Hormonal epitope" },
  { value: "Drug epitope", label: "Drug epitope" },
  { value: "Allergen epitope", label: "Allergen epitope" },
  { value: "Cancer epitope", label: "Cancer epitope" },
  { value: "Therapeutic epitope", label: "Therapeutic epitope" },
];

export {
  crewMateCellTypes,
  antigenTypes,
  subclassOptions,
  effectorFunctionsOptions,
  epitopeTypes,
};
