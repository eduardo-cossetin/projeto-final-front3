import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";
import Text from "../../../../shared-components/Text";
import { useAppDispatch } from "../../../../store/hooks";
import { adicionarUsuario } from "../../../../store/modules/Users/UsersSlice";
import { emailRegex } from "../../../../utils/validators/regexData";
import { IsValidCredentials } from "../../types/IsValidCredentials";

interface ModalCadastroUsuarioProps {
  aberto: boolean;
  mudarAberto: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCadastroUsuario: React.FC<ModalCadastroUsuarioProps> = ({
  aberto,
  mudarAberto,
}) => {
  const handleClose = () => {
    mudarAberto(false);
  };

  const [emailCadastro, setEmailCadastro] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<IsValidCredentials>({
    helperText: "",
    isValid: true,
  });

  const [nomeCadastro, setNomeCadastro] = useState<string>("");
  const [errorNome, setErrorNome] = useState<IsValidCredentials>({
    helperText: "",
    isValid: true,
  });

  const [senhaCadastro, setSenhaCadastro] = useState<string>("");
  const [errorSenha, setErrorSenha] = useState<IsValidCredentials>({
    helperText: "",
    isValid: true,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (emailCadastro.length && !emailRegex.test(emailCadastro)) {
      setErrorEmail({
        helperText: "Informe um e-mail válido.",
        isValid: false,
      });
    } else {
      setErrorEmail({
        helperText: "Utilize seu e-mail para criar uma conta.",
        isValid: true,
      });
    }
  }, [emailCadastro]);

  useEffect(() => {
    if (nomeCadastro.length && nomeCadastro.length < 3) {
      setErrorNome({
        helperText: "Informe um nome válido.",
        isValid: false,
      });
    } else {
      setErrorNome({
        helperText: "Utilize seu e-mail para criar uma conta.",
        isValid: true,
      });
    }
  }, [nomeCadastro]);

  // executa a callback sempre que o valor do estado é alterado
  useEffect(() => {
    if (senhaCadastro.length && senhaCadastro.length < 6) {
      setErrorSenha({
        helperText: "Cadastre uma senha com no mínimo 6 caracteres.",
        isValid: false,
      });
    } else {
      setErrorSenha({
        helperText:
          "Utilize uma senha fácil de lembrar e anote para não esquecer.",
        isValid: true,
      });
    }
  }, [senhaCadastro]);

  const handleSignupUser = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (!ev.currentTarget.checkValidity()) {
      return;
    }

    // cadastrar um usuario no ESTADO GLOBAL
    dispatch(
      adicionarUsuario({
        nome: nomeCadastro,
        email: emailCadastro,
        senha: senhaCadastro,
      })
    );

    // limpar os campos de input
    setNomeCadastro("");
    setEmailCadastro("");
    setSenhaCadastro("");

    // fechar o modal
    handleClose();
  };

  return (
    <Dialog
      open={aberto}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle alignSelf={"center"} id="alert-dialog-title">
        <Text variant="h3"> Crie sua conta!</Text>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <Box component="form" onSubmit={handleSignupUser}>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome"
                type="text"
                variant="outlined"
                sx={{
                  color: "#1e3b37",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                }}
                error={!errorNome.isValid}
                helperText={errorNome.helperText}
                inputProps={{ minLength: 3 }}
                required
                onChange={(event) => {
                  setNomeCadastro(event.currentTarget.value);
                }}
                value={nomeCadastro}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={!errorEmail.isValid}
                helperText={errorEmail.helperText}
                required
                label="E-mail"
                type="email"
                variant="outlined"
                sx={{
                  color: "#1e3b37",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                }}
                onChange={(event) => {
                  setEmailCadastro(event.currentTarget.value);
                }}
                value={emailCadastro}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Senha"
                type="password"
                error={!errorSenha.isValid}
                helperText={errorSenha.helperText}
                inputProps={{ minLength: 6 }}
                required
                variant="outlined"
                sx={{
                  color: "white",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                }}
                onChange={(event) => {
                  setSenhaCadastro(event.currentTarget.value);
                }}
                value={senhaCadastro}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Insira a senha novamente"
                type="password"
                variant="outlined"
                helperText={errorSenha.helperText}
                inputProps={{ minLength: 6 }}
                required
                sx={{
                  color: "white",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                }}
              ></TextField>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Box width={"100%"} display={"flex"} justifyContent={"space-around"}>
            <Button
              variant="contained"
              type="button"
              onClick={handleClose}
              sx={{ backgroundColor: "black" }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              autoFocus
              disabled={
                !errorNome.isValid || !errorEmail.isValid || !errorSenha.isValid
              }
            >
              Criar Conta
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ModalCadastroUsuario;
