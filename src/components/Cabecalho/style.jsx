import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 15px;
`;

export const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: bolder;
  color: black;
  text-decoration: underline #fff;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-left: 20px;
  background-color: blueviolet;
  font-size: 1.2rem;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  text-decoration: underline blueviolet;
  &:hover {
    background-color: #9b31ff;
    cursor: pointer;
  }
`;