import { Box } from "@mui/material";
import fundoRecados from "../../../assets/images/fundoRecados.jpg";

interface fundoRecadosProps {
  children?: React.ReactNode;
}

const BackgroundRecados: React.FC<fundoRecadosProps> = ({ children }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${fundoRecados})`,
        backgroundSize: "cover",
        zIndex: -1,
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundRecados;
