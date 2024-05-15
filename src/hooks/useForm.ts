import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { api } from "~/utils/api";

export function useForm() {
  const [pokemonName, setPokemonName] = useState("");
  const [debounced] = useDebouncedValue(pokemonName.trim(), 500);
  const isEnabled = !!debounced;
  const {
    data: pokemonData,
    isLoading,
    error,
  } = api.pokemon.getPokemon.useQuery(debounced, {
    cacheTime: 10000,
    queryKey: ["pokemon.getPokemon", debounced],
    enabled: isEnabled,
  });
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleClean = () => {
    setPokemonName("");
  };

  const handleSubmit = () => {
    console.log("Saved");
  };

  return {
    pokemonName,
    debounced,
    pokemonData,
    isLoading,
    error,
    handleOnChange,
    handleClean,
    handleSubmit,
    isEnabled,
  };
}
