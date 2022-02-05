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
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;
const Whitepaper = styled.a`
  width: 150px;
  height: 50px;
  margin-right: 50px;
  color: black;
  background-color: #eeee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weigth: 600;
  border-radius: 10px;
  text-decoration: none !important;
  &:hover {
    background-color: #225588;
    cursor: pointer;
    color: #eee;
  }
  @media (max-width: 900px) {
    padding: 0 10px;
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
  @media (max-width: 900px) {
    min-width: 80px;
    display: none;
  }
`;
export function NavBar() {
  return (
    <NavBarContainer>
      <img style={{ marginLeft: "50px" }} src={logo} height={70} />

      <RightContainer>
        <LogoContainer>
          <img src={discord} width={20} />
          <img src={twitter} width={20} />
        </LogoContainer>

        <Whitepaper
          target="_blank"
          href="https://metapass.gitbook.io/api-docs/"
        >
          Whitepaper
        </Whitepaper>
      </RightContainer>
    </NavBarContainer>
  );
}
