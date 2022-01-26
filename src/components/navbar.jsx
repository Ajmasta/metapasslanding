import styled from "styled-components";
import React from "react";
import logo from "../assets/logo.svg";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Whitepaper = styled.div`
  width: 150px;
  height: 50px;
  margin-right: 50px;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weigth: 600;
  border-radius: 10px;
  &:hover {
    background-color: #222255;
    cursor: pointer;
    color: #eee;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  cursor: pointer;
`;
export function NavBar() {
  return (
    <NavBarContainer>
      <img style={{ marginLeft: "50px" }} src={logo} width={80} />

      <RightContainer>
        <LogoContainer>
          <img src={discord} width={20} />
          <img src={twitter} width={20} />
        </LogoContainer>
        <Whitepaper>Whitepaper</Whitepaper>
      </RightContainer>
    </NavBarContainer>
  );
}
