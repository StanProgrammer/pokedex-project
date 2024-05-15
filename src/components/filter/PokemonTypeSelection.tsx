import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { api } from "~/utils/api";

type PokemonTypeSelectionProps = {
  selectedType: string[];
  selectType: (type: string[]) => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, selectedType: string[], theme: Theme) {
  return {
    fontWeight:
      selectedType.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const { data, isLoading, error } = api.types.getPokemonTypes.useQuery();

  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof selectedType>) => {
    const {
      target: { value },
    } = event;
    selectType(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="pokemon-type-select-label">Select Pokemon Type</InputLabel>
        <Select
          labelId="pokemon-type-select-label"
          id="pokemon-type-select"
          multiple
          value={selectedType}
          onChange={handleChange}
          input={<OutlinedInput label="Select Pokemon Type" />}
          MenuProps={MenuProps}
          disabled={isLoading}
          renderValue={(selected) => selected.join(', ')}
        >
          {isLoading ? (
            <MenuItem disabled>
              <CircularProgress size={24} />
            </MenuItem>
          ) : error ? (
            <MenuItem disabled>Error loading types</MenuItem>
          ) : (
            data?.map(({ name, id }) => (
              <MenuItem
                key={id}
                value={name}
                style={getStyles(name, selectedType, theme)}
              >
                {name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default PokemonTypeSelection;
