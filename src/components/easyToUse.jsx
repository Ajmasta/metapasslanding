import React, { useState } from "react";
import styled from "styled-components";
import lockIcon from "../assets/securityIcon.svg";
import dataIcon from "../assets/data.svg";
import controlIcon from "../assets/controlIcon.svg";
import blockIcon from "../assets/multipleBlockchain.svg";
import implementIcon from "../assets/implementIcon.svg";
import idIcon from "../assets/idIcon.svg";
import vennIcon from "../assets/vennIcon.svg";
import freeIcon from "../assets/freeIcon.svg";
import { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

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
  width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(
    95.14% 95.14% at 52.26% 11.67%,
    #93a1eb 0%,
    #3853e2 0.01%,
    #010c31 54.75%,
    #010c31 100%
  );

  border-radius: 10px;
  color: black;
  padding: 0 10px;
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
  max-width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  min-width: 300px;
  color: #ffffff;
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
  font-size: 17px;
  color: #000;
  color: #ffffff;
  min-height: 148px;
  text-align: center;
`;

const TitleTextContainer = styled.h3`
  textalign: center;
  color: white;
`;
export function EasyToUse() {
  const [active, setActive] = useState("gamer");
  const { ref, inView } = useInView({ triggerOnce: true });

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
      <div ref={ref} className={inView ? "opacity" : ""}>
        {active === "gamer" ? (
          <BoxContainer>
            <InfoBox>
              <TitleTextContainer>
                {" "}
                Total control of your data
              </TitleTextContainer>
              <ImageContainer>
                <img src={controlIcon} width={200} alt="data" />
              </ImageContainer>
              <SubTextContainer>
                Metapass uses a new decentralized Web3 standard that gives you
                back authority, privacy, and ownership over your identity and
                data.
              </SubTextContainer>
            </InfoBox>
            <InfoBox>
              <TitleTextContainer>Everything in one place</TitleTextContainer>
              <ImageContainer>
                <img src={vennIcon} width={200} alt="folder" />
              </ImageContainer>
              <SubTextContainer>
                Use Metapass with any web3 app on any blockchain. Have all your
                information in one place instead of scattered across apps and
                wallets.
              </SubTextContainer>
            </InfoBox>
            <InfoBox>
              <TitleTextContainer>Secure your assets </TitleTextContainer>
              <ImageContainer>
                <img src={lockIcon} width={200} alt="security" />
              </ImageContainer>
              <SubTextContainer>
                Metapass keeps your assets safe. Sign up and login with your DID
                so you don’t have to sign with your wallet anymore.
              </SubTextContainer>
            </InfoBox>
            <InfoBox>
              <TitleTextContainer>No gas fees</TitleTextContainer>
              <ImageContainer>
                <img src={freeIcon} width={200} alt="piggyBank" />
              </ImageContainer>
              <SubTextContainer>
                DIDs do not require any gas fee and are free to use whereas
                traditional authentication solutions sometimes require you to
                pay fees.
              </SubTextContainer>
            </InfoBox>
          </BoxContainer>
        ) : (
          <BoxContainer>
            <InfoBox>
              <TitleTextContainer> Easy to implement</TitleTextContainer>
              <ImageContainer>
                <img src={implementIcon} width={200} />
              </ImageContainer>
              <SubTextContainer>
                Easily implement Metapass to your app in a few minutes and lines
                of codes. Metapass uses JSON Web Tokens to communicate with your
                app.
              </SubTextContainer>
            </InfoBox>
            <InfoBox>
              <TitleTextContainer> Easy authentification</TitleTextContainer>
              <ImageContainer>
                <img src={idIcon} width={200} />
              </ImageContainer>
              <SubTextContainer>
                Onboard new users in seconds as login passwords are unnecessary.
                Signing messages with a DID is also way safer than with a
                wallet.
              </SubTextContainer>
            </InfoBox>
            <InfoBox>
              <TitleTextContainer>
                {" "}
                Works with any blockchain
              </TitleTextContainer>
              <ImageContainer>
                <img src={blockIcon} width={200} />
              </ImageContainer>
              <SubTextContainer>
                Users can sign up and login to your game from any blockchain and
                wallet. Make it easy for your users to switch to your
                blockchain.
              </SubTextContainer>
            </InfoBox>
          </BoxContainer>
        )}
      </div>
    </MainContainer>
  );
}
