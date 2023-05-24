import { Box, Typography } from "@mui/material";
import AppBarRecados from "../../config/components/AppBar";
import BackgroundRecados from "../../config/components/Background";

const RecadosPage = () => {
  return (
    <BackgroundRecados>
      <AppBarRecados>
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
              justifyContent={"center"}
              alignItems={"center"}
              height={"10vh"}
              width={"100%"}
              sx={{
                backgroundColor: "black",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                LISTA DE RECADOS
              </Typography>
            </Box>
          </Box>
        </Box>
      </AppBarRecados>
    </BackgroundRecados>
  );
};

export default RecadosPage;
