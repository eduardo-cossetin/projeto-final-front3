import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroPage from "../../pages/Cadastro";
import Home from "../../pages/Home";
import RecadosPage from "../../pages/Recados";

const AppRoutes = () => {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recados" element={<RecadosPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="*" element="/Home" />
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
};

export default AppRoutes;
