// usePokemonData.ts
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

interface UsePokemonDataProps {
  array: string[];
  selectedType: string[];
}

export function usePokemonArray({ array, selectedType }: UsePokemonDataProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const { data, isLoading: arrayLoading } =
    api.pokemon.getPokemonArray.useQuery({
      array: array,
      filter: selectedType,
      limit: rowsPerPage,
      page: page + 1,
    });

  return {
    data: data && data[1],
    totalPokemons: data && data[0],
    arrayLoading,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
}
