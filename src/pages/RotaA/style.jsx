import styled from "styled-components";

export const Caixa = styled.div`
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 6%;
`;

export const Titulo = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const Texto = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: justify;
  font-weight: 400;
`;

export const CampoDosBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 140px;
  margin-top: 2%;
`;

export const styleButton = { borderColor: "#000", color: "#000" };
