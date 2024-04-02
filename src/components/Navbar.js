import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Stack direction='row' alignItems='center' gap={2}>
        <img src={logo} alt="logo" height={45} />
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "white"}}
        >
          Satyam Media
        </Typography>
      </Stack>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
