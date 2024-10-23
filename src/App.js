import { Container, Typography } from "@mui/material";
import "./App.css";
import FormularioCadastro from "./Components/Formulario/FormularioCadastro";
import "fontsource-roboto";

function aoEnviarForm(dados) {
  console.log(dados);
}

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
    </Container>
  );
}

export default App;
