import React from "react";
import { TableRow, TableCell, Chip, Avatar } from "@mui/material";
import { PokemonOuputType } from "~/types";
import { typeBackgroundColors,typeColors } from "~/styles/style";

type Props = {
  pokemon: PokemonOuputType;
};

const PokemonRow: React.FC<Props> = ({ pokemon }) => {
  return (
    <TableRow
    key={pokemon.id}
    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  >
    <TableCell component="th" scope="row" sx={{ maxWidth: 50, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
      {pokemon.id}
    </TableCell>
    <TableCell align="right" sx={{ minWidth: 150, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
      {pokemon.name}
    </TableCell>
    <TableCell align="left" sx={{ maxWidth: 550, whiteSpace: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>
      {pokemon?.description}
    </TableCell>
    <TableCell align="right" sx={{ minWidth: 150 }}>
      {pokemon.types.map((type) => (
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
        src={pokemon.sprite}
        alt={pokemon.name}
        style={{ maxWidth: "50px" }}
      />
    </TableCell>
  </TableRow>
  );
};

export default PokemonRow;
