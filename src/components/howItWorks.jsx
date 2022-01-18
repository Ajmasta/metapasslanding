import React from "react";
import styled from "styled-components";
import helm from "../assets/helm.png";
import issuer from "../assets/issuer.png";
import message from "../assets/message.png";
const BigContainer = styled.div`
  margin: 0;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: black;
  background: linear-gradient(180deg, #121212 0%, #010c31 100%);
`;
const MainContainer = styled.div`
  margin: 0;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  background: radial-gradient(
    95.14% 95.14% at 52.26% 11.67%,
    #93a1eb 0%,
    #3853e2 0.01%,
    #232141 54.75%,
    #232141 100%
  );
  width: 350px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  box-shadow: 1px 1px 6px black;
  margin-right: 20px;
  margin-top: 20px;
  padding: 0 15px;
`;
const HelmContainer = styled.div`
  position: absolute;
  top: -120px;
  z-index: 99;
`;
const KeyContainer = styled.div`
  position: absolute;
  top: -90px;
  z-index: 99;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: flex-start;
`;
export function HowItWorks() {
  return (
    <BigContainer>
      <h1 style={{ marginBottom: "100px" }}>How it Works</h1>
      <MainContainer>
        <InfoContainer>
          <HelmContainer>
            <img width="100px" src={helm} />
          </HelmContainer>

          <TextContainer>
            <h3 style={{ marginBottom: 0, alignSelf: "center" }}>
              Decentralized Identities
            </h3>
            <p style={{ fontSize: "17px" }}>
              Just like a wallet, decentralized identities (DID) consist of a
              public and private key pair. Unlike a wallet, no assets are
              directly linked to your DID. Instead, DIDs are created for the
              sole purpose of identification. You can use the DID like a stamp
              to sign information and prove that it comes from you. That
              information is packaged in what is called a verifiable credential.
            </p>
          </TextContainer>
        </InfoContainer>
        <InfoContainer>
          <HelmContainer>
            <img width="100px" src={message} />
          </HelmContainer>

          <TextContainer>
            <h3 style={{ marginBottom: 0, alignSelf: "center" }}>
              Verifiable Credentials
            </h3>
            <p style={{ fontSize: "17px" }}>
              Verifiable credentials are the cryptographic and digital version
              of an ID card. When someone wants to know your age, you might give
              them a piece of ID like a driver's licence. Verifiable credentials
              are more convenient as they are modular, you can build them with
              any info you want, and they can be transfered easily via the
              internet.
            </p>
          </TextContainer>
        </InfoContainer>
        <InfoContainer>
          <KeyContainer>
            <img width="150px" src={issuer} />
          </KeyContainer>
          <TextContainer>
            <h3 style={{ marginBottom: 0, alignSelf: "center" }}>
              Credentials Issuer
            </h3>
            <p style={{ fontSize: "17px" }}>
              Some information about yourself has to be verified by a trusted
              third-party. For example, you could verify on a trusted app that
              you own a wallet. That app would then send you a verifiable
              credential acknowledging you as the owner of that wallet. From
              then on, you could simply send that verifiable credential as a
              proof of ownership. No need for signing with your wallet anymore.
            </p>
          </TextContainer>
        </InfoContainer>
      </MainContainer>
    </BigContainer>
  );
}
