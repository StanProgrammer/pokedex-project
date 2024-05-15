import React from "react";
import { Chip, Avatar, TablePagination } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Load from "../skeleton";
import TableLayout from "./Container";
import { usePokemonArray } from "~/hooks/usePokemonArray";
import { typeBackgroundColors,typeColors } from "~/styles/style";
type PokedexTableProps = {
  selectedType: string[] | [];
};

const PokedexTable: React.FC<PokedexTableProps> = ({ selectedType }) => {
  const array = [
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Snorlax",
    "Mewtwo",
    "Gastly",
    "Evee",
    "Chansey",
    "Dratini",
    "Hitmonlee",
    "Jigglypuff"
  ];
  const {
    data,
    arrayLoading,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    totalPokemons,
  } = usePokemonArray({ array, selectedType });

  return (
    <>
      {arrayLoading ? (
        <Load />
      ) : (
        <TableLayout>
          {data?.map((pok) => (
            <TableRow
              key={pok.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ maxWidth: 50, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {pok.id}
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 150, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {pok.name}
              </TableCell>
              <TableCell align="left" sx={{ maxWidth: 550, whiteSpace: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>
                {pok?.description}
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 150 }}>
                {pok.types.map((type) => (
                  <Chip
                    key={type.name}
                    label={type.name}
                    variant="outlined"
                    sx={{
                      marginRight: "5px",
                      borderColor: typeColors[type.name] || "#000",
                      color: typeColors[type.name] || "#000",
                      backgroundColor: typeBackgroundColors[type.name] || "#fff",
                      fontWeight: "bold",
                      '& .MuiChip-avatar': {
                        backgroundColor: typeColors[type.name] || "#000",
                        color: "#fff",
                      },
                    }}
                    avatar={<Avatar>{type.name.charAt(0)}</Avatar>}
                  />
                ))}
              </TableCell>
              <TableCell align="right" sx={{ maxWidth: 50 }}>
                <img
                  src={pok.sprite}
                  alt={pok.name}
                  style={{ maxWidth: "50px" }}
                />
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 20]}
              count={totalPokemons ?? 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableLayout>
      )}
    </>
  );
};




export default PokedexTable;
