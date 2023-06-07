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
import * as React from "react";
import { useState } from "react";
import Text from "../../../../shared-components/Text";

interface ModalCadastroUsuarioProps {
  aberto: boolean;
  mudarAberto: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCadastroUsuario: React.FC<ModalCadastroUsuarioProps> = ({
  aberto,
  mudarAberto,
}) => {
  const [emailCadastro, setEmailCadastro] = useState<string>("");
  const [nomeCadastro, setNomeCadastro] = useState<string>("");
  const [senhaCadastro, setSenhaCadastro] = useState<string>("");

  const handleClose = () => {
    mudarAberto(false);
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
      <DialogContent>
        <Box>
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
                onChange={(event) => {
                  setNomeCadastro(event.currentTarget.value);
                }}
                value={nomeCadastro}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
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
                sx={{
                  color: "white",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                }}
              ></TextField>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions>
        <Box width={"100%"} display={"flex"} justifyContent={"space-around"}>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ backgroundColor: "black" }}
          >
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Criar Conta
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCadastroUsuario;
