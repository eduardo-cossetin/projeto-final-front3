import { Box, Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Text from "../../../../shared-components/Text";

const FormLogin = () => {
  return (
    <Box component={"form"}>
      <Grid container spacing={2} flexDirection={"column"}>
        <Grid item xs={12}>
          <TextField
            type="text"
            variant="outlined"
            label="Nome"
            sx={{ marginBottom: "8px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            sx={{ marginBottom: "8px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
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
            <Link to={".."} style={{ textDecoration: "none", color: "black" }}>
              CLIQUE AQUI
            </Link>
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormLogin;
