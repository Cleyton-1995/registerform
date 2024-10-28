import { Button, TextField } from "@mui/material";
import React from "react";

export default function DadosEntrega() {
  return (
    <form>
      <TextField
        id="CEP"
        label="CEP"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereco"
        label="Endereço"
        required
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}
