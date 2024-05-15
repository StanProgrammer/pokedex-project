import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import Search from "./Search";
import FormResult from "./FormResult";
import { useForm } from "~/hooks/useForm";

export default function Form() {
  const {
    pokemonName,
    pokemonData,
    isLoading,
    error,
    handleOnChange,
    handleClean,
    handleSubmit,
    isEnabled,
  } = useForm();

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
        Pokémon Search
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}>
        <Search
          onChange={handleOnChange}
          onClean={handleClean}
          onSubmit={handleSubmit}
          value={pokemonName}
        />
      </Box>
      <Divider sx={{ marginBottom: 6 }} />

      <FormResult
        pokemonData={pokemonData}
        error={error?.message}
        isEnabled={isEnabled}
        isLoading={isLoading}
      />
    </Box>
  );
}
