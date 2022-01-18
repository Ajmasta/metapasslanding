import React from "react";
import styled from "styled-components";
import lockIcon from "../assets/lockBlack.svg";
import dataIcon from "../assets/data.svg";
import controlIcon from "../assets/controlIcon.svg";
import blockIcon from "../assets/blockIcon.svg";
import implementIcon from "../assets/implementIcon.svg";
import idIcon from "../assets/idIcon.svg";
import vennIcon from "../assets/vennIcon.svg";
import freeIcon from "../assets/freeIcon.svg";

const MainContainer = styled.div`
  margin: 0;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(180deg, #010c31 0%, #121212 100%);
  padding-bottom: 100px;
`;
const InfoBox = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  background-color: #eeeeee;
  border-radius: 10px;
  color: black;
  margin-right: 20px;
  margin-top: 20px;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1150px;
`;
const ImageContainer = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
`;
export function EasyToUse() {
  return (
    <MainContainer>
      <h1> Easy to use, easy to implement</h1>
      <h3> For gamers and web3 users</h3>
      <BoxContainer>
        <InfoBox>
          <ImageContainer>
            <img src={lockIcon} width={45} />
          </ImageContainer>
          <h3 style={{ margin: 0 }}>Secure your assets </h3>
          <p style={{ margin: 0, fontSize: 15 }}>
            Using your wallet to sign up and identify yourself can be dangerous.
            Instead you can simply use a DID. Connecting with a DID feels
            similar to using a wallet, but it does not put your assets at risk.
          </p>
        </InfoBox>
        <InfoBox>
          <ImageContainer>
            <img src={controlIcon} width={45} />
          </ImageContainer>
          <h3 style={{ margin: 0 }}> Total control of your data</h3>
          <p style={{ margin: 0, fontSize: 15 }}>
            Right now, our online identities depend mostly on centralized
            third-parties who use and profit from our data. Decentralized
            identifiers are a new Web3 standard that gives you back authority
            over your data, and autonomy in the way you manage it.
          </p>
        </InfoBox>
        <InfoBox>
          <ImageContainer>
            <img src={vennIcon} width={45} />
          </ImageContainer>
          <h3 style={{ margin: 0 }}>Everything in one place</h3>
          <p style={{ margin: 0, fontSize: 15 }}>
            Decentralized identifiers can work with any Web3 app on any
            blockchain. Instead of having your information scattered in multiple
            wallets, you can have everything in one place.
          </p>
        </InfoBox>
      </BoxContainer>
      <h3>For Devs</h3>
      <BoxContainer>
        <InfoBox>
          <ImageContainer>
            <img src={implementIcon} width={45} />
          </ImageContainer>
          <h3 style={{ margin: 0 }}> Easy to implement</h3>
          <p style={{ margin: 0, fontSize: 15 }}>
            DID and verifiable credentials can communicate with any Web3 App
            through JSON Web-Tokens (JWT). JWT are the most common form of
            authentification so it is easy to seamlessly implement support for
            DIDs on your app.
          </p>
        </InfoBox>
        <InfoBox>
          <ImageContainer>
            <img src={idIcon} width={45} />
          </ImageContainer>
          <h3 style={{ margin: 0 }}> Easy authentification</h3>
          <p style={{ margin: 0, fontSize: 15 }}>
            Since users are able to send their information with the click of a
            button, they do not need to answer long forms to signup. Just like
            when signing up with a wallet, passwords are also unnecessary.
          </p>
        </InfoBox>
        <InfoBox>
          <ImageContainer>
            <img src={blockIcon} width={45} />
          </ImageContainer>
          <h3 style={{ margin: 0 }}> Works with any blockchain</h3>
          <p style={{ margin: 0, fontSize: 15 }}>
            Having your users manage a new wallet everytime they want to try out
            an app on another blockchain is a big barrier of entry. As DIDs are
            blockchain agnostic, users can use them to sign up and login on any
            blockchain.
          </p>
        </InfoBox>
        <InfoBox>
          <ImageContainer>
            <img src={freeIcon} width={45} />
          </ImageContainer>
          <h3 style={{ margin: 0 }}>No gas fees</h3>
          <p style={{ margin: 0, fontSize: 15 }}>
            Some authentification solutions require you to mint NFTs or to
            interact with contracts. DIDs do not require any gas fee and are
            free to use.
          </p>
        </InfoBox>
      </BoxContainer>
    </MainContainer>
  );
}
