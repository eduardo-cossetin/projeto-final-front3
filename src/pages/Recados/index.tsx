import { Box, Grid, Typography } from "@mui/material";
import BackgroundRecados from "../../shared-components/BackgroundRecados";
import AppBarRecados from "./components/AppBar";
import MuiCard from "./components/MuiCard";

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
            <Grid container height={"10vh"} width={"100%"} sx={{}}>
              <Grid item xs={12} textAlign={"center"}>
                <Typography
                  variant="h3"
                  sx={{ color: "white", backgroundColor: "#1e3b37" }}
                >
                  LISTA DE RECADOS
                </Typography>
              </Grid>
              <Box display={"flex"}>
                <MuiCard />
                <MuiCard />
                <MuiCard />
                <MuiCard />
              </Box>
            </Grid>
          </Box>
        </Box>
      </AppBarRecados>
    </BackgroundRecados>
  );
};

export default RecadosPage;
