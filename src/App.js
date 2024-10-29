import { Container, Typography } from "@mui/material";
import "./App.css";
import FormularioCadastro from "./Components/Formulario/FormularioCadastro";
import "fontsource-roboto";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/Validacoes";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" marginBottom={5}>
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{
          cpf: validarCPF,
          senha: validarSenha,
          nome: validarSenha,
        }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}
export default App;
