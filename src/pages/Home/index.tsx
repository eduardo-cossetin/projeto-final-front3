import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import BackgroundRecados from "../../config/components/Background";
import Text from "../../config/components/Text";

const Home = () => {
  return (
    <BackgroundRecados>
      <Box
        height="100vh"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          container
          height={"65%"}
          width={"80%"}
          sx={{ backgroundColor: "white", borderRadius: "8px" }}
        >
          <Grid
            item
            xs={6}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            sx={{
              backgroundColor: "#1e3b37",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          >
            <Text variant="h2" component="h1" sx={{ color: "white" }}>
              RECADOS
            </Text>

            <Box width={"75%"}>
              <Text variant="p" component="p" sx={{ color: "white" }}>
                Faça LOGIN ao lado e gerencie seus recados de forma organizada e
                gratuita!
              </Text>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            flexWrap={"wrap"}
            flexDirection={"column"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            sx={{ gap: 2 }}
          >
            <Text
              variant="h3"
              component="h2"
              sx={{ color: "#1e3b37", marginTop: "32px" }}
            >
              Login
            </Text>
            <Box>
              <FormControl sx={{ marginTop: "-32px" }}>
                <TextField
                  type="text"
                  variant="outlined"
                  label="Nome"
                  sx={{ marginBottom: "8px" }}
                />
                <TextField
                  label="Senha"
                  type="password"
                  variant="outlined"
                  sx={{ marginBottom: "8px" }}
                />
                <Button
                  variant="contained"
                  sx={{ color: "white", backgroundColor: "#1e3b37" }}
                >
                  Entrar
                </Button>
              </FormControl>
            </Box>
            <Box>
              <Text variant="p">Não tem conta? </Text>
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  backgroundColor: "transparent",
                  outlineColor: "red",
                  border: "2px",
                  borderColor: "red",
                }}
              >
                CLIQUE AQUI!
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </BackgroundRecados>
  );
};
export default Home;
