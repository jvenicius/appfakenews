import { Container, Button } from "@mui/material";
import React from "react";
import { Caixa, Titulo, Texto, CampoDosBotoes, styleButton } from "./style";
import { useParams } from "react-router-dom";

const RotaB = () => {
  const { id } = useParams();
  return (
    <Container>
      <Caixa>
        <Titulo>Etapa 2/3</Titulo>
        <Texto>
          Qual é a quantidade de elementos falsos necessários para que possamos
          considerar que se trata de uma fake news?
        </Texto>
        <CampoDosBotoes>
          <Button variant="outlined" style={styleButton}>A) Nenhum elemento falso</Button>
          <Button variant="outlined" style={styleButton}>B) Apenas um elemento falso</Button>
          <Button variant="outlined" style={styleButton}>C) A partir de dois elementos falsos</Button>
        </CampoDosBotoes>
      </Caixa>
    </Container>
  );
};

export default RotaB;
