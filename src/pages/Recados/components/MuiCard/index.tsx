import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { v4 as generateId } from "uuid";
import RecadosModel from "../../../../store/types/RecadosModel";

const listaDeRecados: RecadosModel[] = [
  {
    id: generateId(),
    title: "Recado",
    description: "Descrição do recado",
    createdAt: "08/06/2023",
  },
];

const MuiCard = () => {
  return (
    <Box>
      <Card sx={{ backgroundColor: "grey", margin: 1 }}>
        <CardContent>
          {listaDeRecados.map((recado) => {
            return (
              <>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h5">{recado.title}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6">{recado.description}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      Criado em:{recado.createdAt}
                    </Typography>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </CardContent>
        <Box display={"flex"} justifyContent={"space-evenly"} height={"20px"}>
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "black" }}
          >
            APAGAR
          </Button>
          <Button size="small" variant="contained">
            EDITAR
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default MuiCard;
