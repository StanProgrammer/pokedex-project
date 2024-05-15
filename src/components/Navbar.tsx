import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "@mui/material/Link";

const menuOptions = [
  { id: 1, title: "", href: "/" },
  // Add other pages here
];

const Header: FC = () => {
  const { asPath, prefetch, push } = useRouter();

  useEffect(() => {
    void prefetch("/");
  }, [prefetch]);

  const handleOnRedirect = () => {
    void push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          onClick={handleOnRedirect}
          sx={{ alignItems: "center", cursor: "pointer", display: "flex" }}
        >
        </Box>
        <Typography variant="h6" sx={{ paddingLeft: 1, color: 'white' }}>Pokémon Database</Typography>
       
        <Box>
          {menuOptions.map(({ id, title, href }) => (
            <Link
              color="inherit"
              href={href}
              key={id}
              sx={{
                marginLeft: 1,
                textDecoration: asPath === href ? "underline" : "none",
              }}
            >
              {title}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
