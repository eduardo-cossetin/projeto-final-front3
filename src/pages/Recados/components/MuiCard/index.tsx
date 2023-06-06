import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const MuiCard = () => {
  return (
    <Box>
      <Card sx={{ backgroundColor: "grey", margin: 1 }}>
        <CardContent>
          <Typography variant="h4" component="div">
            Recado
          </Typography>

          <Typography variant="h6" color="InfoText">
            Descrição do recado
          </Typography>
          <Typography variant="body2" color="InfoText">
            Criado em: 00/00/0000
          </Typography>
        </CardContent>
        <Box display={"flex"} justifyContent={"space-evenly"}>
          <Button variant="contained" sx={{ backgroundColor: "red" }}>
            APAGAR
          </Button>
          <Button variant="contained">EDITAR</Button>
        </Box>
      </Card>
    </Box>
  );
};

export default MuiCard;
