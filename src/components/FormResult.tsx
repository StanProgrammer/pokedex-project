import React, { useEffect } from "react";
import { PokemonOuputType } from "~/types";
import PokemonRow from "./PokemonRow";
import { Box, CircularProgress, Typography } from "@mui/material";
import TableLayout from "./table/Container";

type Props = {
  pokemonData: PokemonOuputType | undefined;
  error: string | undefined;
  isEnabled: boolean;
  isLoading?: boolean;
};

export default function FormResult({
  pokemonData,
  isEnabled,
  isLoading,
  error,
}: Props) {
  if (!isEnabled) return <AnimatedPokemon />;
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {isLoading ? (
        <CircularProgress
          style={{
            margin: "auto",
            display: "block",
          }}
        />
      ) : pokemonData ? (
        <TableLayout>
          <PokemonRow pokemon={pokemonData} />
        </TableLayout>
      ) : (
        <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
          {error ?? "No Pokémon found"}
        </Typography>
      )}
    </Box>
  );
}

const AnimatedPokemon = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%" width="100%" style={{ pointerEvents: "none" }}>
      <div
        className="tenor-gif-embed"
        data-postid="20178372"
        data-share-method="host"
        data-aspect-ratio="3.48"
        data-width="100%"
        style={{ pointerEvents: "none" }}
      >
        <a href="https://tenor.com/view/pokemon-pokeball-ball-gif-20178372">
          Pokemon Pokeball Sticker
        </a>
        from <a href="https://tenor.com/search/pokemon-stickers">Pokemon Stickers</a>
      </div>
    </Box>
  );
};
