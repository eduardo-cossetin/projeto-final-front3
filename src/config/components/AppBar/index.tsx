import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface AppBarRecadosProps {
  children?: React.ReactNode;
}

const AppBarRecados: React.FC<AppBarRecadosProps> = ({ children }) => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#1e3b37" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            hjgj
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color="success"
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                  sx={{ color: "black" }}
                />
              }
              label={auth ? "SAIR" : "LOGAR"}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default AppBarRecados;
