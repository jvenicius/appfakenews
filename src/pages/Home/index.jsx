import React from "react";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Caixa,
  Titulo,
  Texto,
  CampoDosBotoes,
  styleButton,
} from "./style";

const Home = () => {
  return (
      <Container>
        <Caixa>
          <Titulo>APP FAKE NEWS</Titulo>
          <Texto>
            Bem vindo ao web app que te orienta em como melhorar suas
            habilidades de identificação de fake news. Aqui você encontrará
            através de exemplos algumas situações comuns que nos deparamos ao
            lermos uma fake news. Mas você sabe o que essa tão famosa expressão
            significa?!{" "}
          </Texto>
          <CampoDosBotoes>
            <Link to="/RotaA" style={{ textDecoration: "none" }}>
              <Button variant="outlined" style={styleButton}>
                INICIAR
              </Button>
            </Link>
          </CampoDosBotoes>
        </Caixa>
      </Container>
  );
};

export default Home;
