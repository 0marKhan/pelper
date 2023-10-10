import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const SearchBox = styled(TextField)({
  width: "40rem",
  textAlign: "center",
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff00ff",
    },
  },
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& label": {
    color: "#fff",
  },
  "@media (max-width: 768px)": {
    width: "80%",
  },
});

export default SearchBox;
