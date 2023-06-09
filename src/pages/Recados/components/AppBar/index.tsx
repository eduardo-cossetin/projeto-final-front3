import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../shared-components/Loading";
import { useAppDispatch } from "../../../../store/hooks";
import {
  hideLoading,
  showLoading,
} from "../../../../store/modules/loading/loadingSlice";

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

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const logOut = () => {
    localStorage.removeItem("userLogged");
    sessionStorage.removeItem("userLogged");

    dispatch(showLoading());
    setTimeout(() => {
      dispatch(hideLoading());
      navigate("/");
    }, 2000);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#1e3b37" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGIN
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
                <MenuItem onClick={handleClose}>Olá, fulano!</MenuItem>
              </Menu>
            </div>
          )}
          <FormGroup>
            <Button
              variant="outlined"
              size="small"
              sx={{ backgroundColor: "white" }}
              onClick={logOut}
            >
              Sair
            </Button>
          </FormGroup>
        </Toolbar>
      </AppBar>
      {children}
      <Loading />
    </Box>
  );
};

export default AppBarRecados;
