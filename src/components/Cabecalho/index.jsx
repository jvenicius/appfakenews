import React from "react";
import { Link } from "react-router-dom";
import { Header, Logo, Menu, Item } from "./style";

const Cabecalho = () => {
  return (
    <Header>
      <Link to="/">
        <Logo>PIBIC APP - IDENTIFICANDO FAKE NEWS</Logo>
      </Link>
      <Menu>
        <Link to="/">
          <Item> Inicio </Item>
        </Link>
        <Link to="/rotaa">
          <Item>Rota A</Item>
        </Link>
        <Link to="/rotab">
          <Item>Rota B</Item>
        </Link>
        <Link to="/rotac">
          <Item>Rota C</Item>
        </Link>
      </Menu>
    </Header>
  );
};

export default Cabecalho;
