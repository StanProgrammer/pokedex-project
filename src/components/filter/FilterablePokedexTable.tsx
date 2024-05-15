// FilterablePokedexTable.tsx
import React, { useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "../table/PokedexTable";
import { Typography } from "@mui/material";

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string[]>([]);

  return (
    <div>
      <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
        Pokédex
      </Typography>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={setSelectedType}
      />
      <PokedexTable selectedType={selectedType} />
    </div>
  );
};

export default FilterablePokedexTable;
