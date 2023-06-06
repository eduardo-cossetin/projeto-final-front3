import { Box, Grid } from "@mui/material";
import BackgroundRecados from "../../shared-components/BackgroundRecados";
import Text from "../../shared-components/Text";
import FormLogin from "./components/FormLogin";

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
              variant="h2"
              component="h2"
              sx={{ color: "#1e3b37", marginTop: "32px" }}
            >
              Login
            </Text>
            <FormLogin />
          </Grid>
        </Grid>
      </Box>
    </BackgroundRecados>
  );
};
export default Home;
