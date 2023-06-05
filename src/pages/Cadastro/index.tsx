import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import BackgroundRecados from "../../config/components/Background";
import Text from "../../config/components/Text";

const CadastroPage = () => {
  return (
    <BackgroundRecados>
      <Box
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          height={"85%"}
          width={"55%"}
          sx={{
            backgroundImage: "initial",
            backgroundColor: "#1e3b37",
            borderRadius: "8px",
            color: "white",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            height={"99%"}
            width={"75%"}
            sx={{
              backgroundImage: "initial",
              backgroundColor: "#ffffff",
              // borderRadius: "8px",
              color: "white",
            }}
          >
            <Box
              height={"100%"}
              width={"80%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                height={"100%"}
                width={"100%"}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={""}
                flexDirection={"column"}
              >
                <Box>
                  <Text variant="h2" sx={{ color: "#1e3b37" }}>
                    Criar Cadastro
                  </Text>
                </Box>
                <FormControl>
                  <FormLabel
                    sx={{
                      color: "#1e3b37",
                    }}
                  >
                    Nome:
                  </FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    sx={{
                      color: "#1e3b37",
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                    }}
                  ></TextField>
                  <FormLabel
                    sx={{
                      color: "#1e3b37",
                    }}
                  >
                    E-mail:
                  </FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    sx={{
                      color: "#1e3b37",
                      borderRadius: "8px",
                      backgroundColor: "#ffffff",
                    }}
                  ></TextField>
                  <FormLabel
                    sx={{
                      color: "#1e3b37",
                    }}
                  >
                    Senha:
                  </FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderRadius: "8px",
                      backgroundColor: "#ffffff",
                    }}
                  ></TextField>
                  <FormLabel
                    sx={{
                      color: "#1e3b37",
                    }}
                  >
                    Insira a senha novamente:
                  </FormLabel>
                  <TextField
                    type="text"
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderRadius: "8px",
                      backgroundColor: "#ffffff",
                    }}
                  ></TextField>
                  <Box
                    width={"100%"}
                    display={"flex"}
                    sx={{ alignSelf: "center", justifyContent: "space-around" }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        marginTop: "16px",
                        backgroundColor: "#050000",
                        color: "white",
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        marginTop: "16px",
                        backgroundColor: "#1e3b37",
                        color: "white",
                      }}
                    >
                      Cadastrar
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </BackgroundRecados>
  );
};

export default CadastroPage;
