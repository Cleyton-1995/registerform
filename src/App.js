import { Container, Typography } from "@mui/material";
import "./App.css";
import FormularioCadastro from "./Components/Formulario/FormularioCadastro";
import "fontsource-roboto";

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" marginBottom={5}>
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  );
}

export default App;
