import { Container, Button } from "@mui/material";
import React, { useState } from "react";
import { Caixa, Titulo, Texto, CampoDosBotoes, styleButton } from "./style";
import FeedbackQuestion from "../../components/FeedbackQuestion";
import Rota from "../../components/Rota";
import { feedBackA, feedBackB, feedBackC } from "./texts";

const RotaB = () => {
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [openC, setOpenC] = useState(false);

  const handleClickOpenA = () => {
    setOpenA(true);
  };
  const handleClickOpenB = () => {
    setOpenB(true);
  };
  const handleClickOpenC = () => {
    setOpenC(true);
  };

  const handleClose = () => {
    setOpenA(false);
    setOpenB(false);
    setOpenC(false);
  };

  return (
    <Container>
      <Caixa>
        <Titulo>ETAPA 2/3</Titulo>
        <Texto>
          EM DESENVOLVIMENTO
        </Texto>
        <CampoDosBotoes>
          <Button
            id="A"
            onClick={handleClickOpenA}
            variant="outlined"
            style={styleButton}
          >
            A) ...
          </Button>
          <Button
            id="B"
            onClick={handleClickOpenB}
            variant="outlined"
            style={styleButton}
          >
            B) ...
          </Button>
          <Button
            id="C"
            onClick={handleClickOpenC}
            variant="outlined"
            style={styleButton}
          >
            C) ...
          </Button>
        </CampoDosBotoes>
      </Caixa>
      <FeedbackQuestion
        open={openA}
        handleClose={handleClose}
        dialogText={feedBackA}
      ></FeedbackQuestion>
      <FeedbackQuestion
        open={openB}
        handleClose={handleClose}
        dialogText={feedBackB}
        buttonText={<Rota rota="/rotaB" texto="Próxima Etapa!"></Rota>}
      ></FeedbackQuestion>
      <FeedbackQuestion
        open={openC}
        handleClose={handleClose}
        dialogText={feedBackC}
      ></FeedbackQuestion>
    </Container>
  );
};

export default RotaB;
