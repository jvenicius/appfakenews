import React from "react";
import { LinkStyled } from "./style";

const Rota = ({rota, texto}) => {
    return (
        <LinkStyled to={rota}>{texto}</LinkStyled>
    )
}

export default Rota;