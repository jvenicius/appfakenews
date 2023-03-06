import { Container, Button } from "@mui/material";
import React, { useState } from "react";
import { Caixa, Titulo, Texto, CampoDosBotoes, styleButton } from "./style";
import FeedbackQuestion from "../../components/FeedbackQuestion";

const RotaA = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const feedBackA = {
    title: 'Refletindo sobre sua resposta...',
    description: 'Se a informação disseminada não possui nenhuma parte falsa, o que a tornaria uma fake news? Pense mais um pouco e tente novamente.'
  };
  const feedBackB = `Parabéns! Você acertou!
  Independentemente do tamanho da informação disseminada, um elemento falso é suficiente
  para que ela seja considerada uma fake news.`;
  const feedBackC = `Refletindo sobre a sua resposta...
  Considerando que precisaria haver a partir de 2 elementos falsos, se houvesse apenas 1, a
  informação disseminada seria considerada verdadeira?`;

  return (
    <Container>
      <Caixa>
        <Titulo>Etapa 1/3</Titulo>
        <Texto>
          Qual é a quantidade mínima de elementos falsos necessários para que
          possamos considerar que uma informação se trata de uma fake news?
        </Texto>
        <CampoDosBotoes>
          <Button
            id="A"
            onClick={handleClickOpen}
            variant="outlined"
            style={styleButton}
          >
            A) Nenhum elemento falso
          </Button>
          <Button
            id="B"
            onClick={handleClickOpen}
            variant="outlined"
            style={styleButton}
          >
            B) Apenas um elemento falso
          </Button>
          <Button
            id="C"
            onClick={handleClickOpen}
            variant="outlined"
            style={styleButton}
          >
            C) A partir de dois elementos falsos
          </Button>
        </CampoDosBotoes>
      </Caixa>
      <FeedbackQuestion
        open={open}
        handleClose={handleClose}
        dialogText={feedBackA}
      ></FeedbackQuestion>
    </Container>
  );
};

export default RotaA;
