import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import BackgroundRecados from "../../config/components/Background";

const Home = () => {
  return (
    <BackgroundRecados>
      <Box
        height="100vh"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display="flex"
          height={"65%"}
          width={"80%"}
          sx={{ backgroundColor: "white", borderRadius: "8px" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            width={"50%"}
            sx={{
              backgroundColor: "#1e3b37",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          >
            <Box></Box>
            <Typography variant="h3" component="h1" sx={{ color: "white" }}>
              Bem-vindo!
            </Typography>

            <Box width={"60%"}>
              <Typography variant="h6" component="p" sx={{ color: "white" }}>
                Faça LOGIN ao lado e gerencie seus recados de forma organizada!
              </Typography>
            </Box>
          </Box>
          <Box
            flexWrap={"wrap"}
            flexDirection={"column"}
            height={"100%"}
            width={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ gap: 2 }}
          >
            <Typography variant="h3" component="h2" sx={{ color: "#1e3b37" }}>
              Login
            </Typography>
            <Box>
              <FormControl>
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
              Não tem conta? Crie agora gratuitamente!
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#0d0d0d",
                }}
              >
                CRIAR CONTA
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </BackgroundRecados>
  );
};
export default Home;
