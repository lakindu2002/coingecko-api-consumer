import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, TextFieldProps } from "@mui/material";

type SearchProps = {} & TextFieldProps;

export const Search: FC<SearchProps> = (props) => {
  return (
    <>
      <TextField
        size="medium"
        fullWidth
        label="Search"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        {...props}
      />
    </>
  );
};
