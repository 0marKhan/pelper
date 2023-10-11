import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const SearchButton = styled(Button)(({ theme }) => ({
  margin: "1.5rem 1rem 0 1rem",
  height: "3.5rem",
  color: "#fff",
  backgroundColor: "#ff00ff",

  "&:hover": {
    backgroundColor: "#cc00cc",
  },

  "&:active": {
    backgroundColor: "#b300b3",
  },
}));

export default SearchButton;
