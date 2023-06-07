import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { SnackBarComp } from "../../../../shared-components/SnackBar";
import Text from "../../../../shared-components/Text";
import {
  emailValidator,
  passwordValidator,
} from "../../../../validators/inputs";
import ModalCadastroUsuario from "../ModalCadastroUsuario";

interface UserProps {
  id?: string;
  email: string;
  password: string;
}

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const loggedUser = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    if (checked) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  const verifySnack = (emailIsValid: boolean, passwordIsValid: boolean) => {
    if (emailIsValid === false) {
      setMessage("Erro ao tentar logar.");
      setIsError(!emailIsValid);
      return;
    }

    if (passwordIsValid === false) {
      setMessage("Erro ao tentar logar.");
      setIsError(!passwordIsValid);
      return;
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickway") {
      return;
    }

    setIsError(false);
  };

  const save = () => {
    const emailIsValid = emailValidator(email);
    const passwordIsValid = passwordValidator(password);

    verifySnack(emailIsValid, passwordIsValid);

    const user: UserProps = {
      id: (Math.random() * 10).toString(),
      email: email,
      password: password,
    };
    console.log(user);
    localStorage.setItem("users", JSON.stringify(user));
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={(event) => {
          event.preventDefault();
          save();
        }}
      >
        <Grid container spacing={1} flexDirection={"column"}>
          <Grid item xs={12}>
            <TextField
              type="text"
              variant="outlined"
              label="Email"
              sx={{ marginBottom: "8px" }}
              onChange={(event) => {
                setEmail(event.currentTarget.value);
                console.log(event.currentTarget.value);
              }}
              value={email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              sx={{ marginBottom: "8px" }}
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
              value={password}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Permanecer logado?"
              onChange={loggedUser}
              value={isLogged}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#1e3b37",
                "&:hover": { backgroundColor: "#305f59" },
                display: "block",
                margin: "auto",
              }}
            >
              Entrar
            </Button>
          </Grid>
          <Grid item xs={12} alignSelf={"center"}>
            <Text variant="caption">
              Não tem conta?{" "}
              <Button
                type="button"
                style={{ textDecoration: "none", color: "black" }}
                onClick={handleClickOpen}
              >
                CLIQUE AQUI
              </Button>
            </Text>
          </Grid>
        </Grid>
        <SnackBarComp
          message={message}
          isError={isError}
          handleClose={handleClose}
        />
      </Box>
      <ModalCadastroUsuario aberto={isOpen} mudarAberto={setIsOpen} />
    </>
  );
};

export default FormLogin;
