import React, { useState } from "react";
import styled from "styled-components";
import lockIcon from "../assets/lockBlack.svg";
import dataIcon from "../assets/data.svg";
import controlIcon from "../assets/controlIcon.svg";
import blockIcon from "../assets/blockIcon.svg";
import implementIcon from "../assets/implementIcon.svg";
import idIcon from "../assets/idIcon.svg";
import vennIcon from "../assets/vennIcon.svg";
import freeIcon from "../assets/freeIcon.svg";
import { keyframes } from "styled-components";

const appearAnimation = keyframes`
0% {opacity:0}
100% {opacity:1}
`;
const MainContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #010c3d 0%, #222255 60%);
`;
const InfoBox = styled.div`
  width: 420px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  background-color: #dddddd;
  border-radius: 10px;
  color: black;
  margin-right: 40px;
  margin-top: 50px;
  transition: 0.25s all ease;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 900px) {
    width: 320px;
    height: 250px;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 950px;
  max-width: 100%;
`;

const ImageContainer = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  min-width: 300px;
`;
const Title = styled.h2`
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;

const SubTextContainer = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: 400;
`;
export function EasyToUse() {
  const [active, setActive] = useState("gamer");
  return (
    <MainContainer>
      <h1> Easy to use, easy to implement</h1>
      <TitleContainer>
        <Title
          onClick={() => setActive("gamer")}
          style={
            active === "gamer"
              ? { borderBottom: "1px solid rgb(255,255,255)" }
              : {}
          }
        >
          {" "}
          For Gamers
        </Title>{" "}
        <Title
          onClick={() => setActive("dev")}
          style={
            active === "dev"
              ? { borderBottom: "1px solid rgb(255,255,255)" }
              : {}
          }
        >
          For Devs
        </Title>
      </TitleContainer>
      {active === "gamer" ? (
        <BoxContainer style={{ animaton: "appear 1s forwards" }}>
          <InfoBox>
            <ImageContainer>
              <img src={controlIcon} width={45} />
            </ImageContainer>
            <h3 style={{ margin: 0 }}> Total control of your data</h3>
            <SubTextContainer>
              Metapass uses a new decentralized Web3 standard that gives you
              back authority, privacy, and ownership over your identity and
              data.
            </SubTextContainer>
          </InfoBox>
          <InfoBox>
            <ImageContainer>
              <img src={vennIcon} width={45} />
            </ImageContainer>
            <h3 style={{ margin: 0 }}>Everything in one place</h3>
            <SubTextContainer>
              Use Metapass with any web3 app on any blockchain. Have all your
              information in one place instead of scattered across apps and
              wallets.
            </SubTextContainer>
          </InfoBox>
          <InfoBox>
            <ImageContainer>
              <img src={lockIcon} width={45} />
            </ImageContainer>
            <h3 style={{ margin: 0 }}>Secure your assets </h3>
            <SubTextContainer>
              Metapass keeps your assets safe. Sign up and login with your DID
              so you don’t have to sign with your wallet anymore.
            </SubTextContainer>
          </InfoBox>
          <InfoBox>
            <ImageContainer>
              <img src={freeIcon} width={45} />
            </ImageContainer>
            <h3 style={{ margin: 0 }}>No gas fees</h3>
            <SubTextContainer>
              DIDs do not require any gas fee and are free to use whereas
              traditional authentication solutions sometimes require you to pay
              fees.
            </SubTextContainer>
          </InfoBox>
        </BoxContainer>
      ) : (
        <BoxContainer>
          <InfoBox>
            <ImageContainer>
              <img src={implementIcon} width={45} />
            </ImageContainer>
            <h3 style={{ margin: 0 }}> Easy to implement</h3>
            <SubTextContainer>
              Implement Metapass to your game’s login in a few minutes and lines
              of codes. DID and verifiable credentials can communicate with any
              Web3 App through JSON Web-Tokens (JWT).
            </SubTextContainer>
          </InfoBox>
          <InfoBox>
            <ImageContainer>
              <img src={idIcon} width={45} />
            </ImageContainer>
            <h3 style={{ margin: 0 }}> Easy authentification</h3>
            <SubTextContainer>
              Onboard new users in seconds. Login passwords also become
              obsolete, so you don’t need to store those anymore.
            </SubTextContainer>
          </InfoBox>
          <InfoBox>
            <ImageContainer>
              <img src={blockIcon} width={45} />
            </ImageContainer>
            <h3 style={{ margin: 0 }}> Works with any blockchain</h3>
            <SubTextContainer>
              Users can sign up and login to your game from any blockchain and
              wallet. Make it easy for your users to switch to your blockchain.
            </SubTextContainer>
          </InfoBox>
        </BoxContainer>
      )}
    </MainContainer>
  );
}
