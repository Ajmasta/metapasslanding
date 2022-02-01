import React from "react";
import styled from "styled-components";
import helm from "../assets/helm.png";
import issuer from "../assets/issuer.png";
import message from "../assets/message.png";
import moon from "../assets/moon.svg";
import { useInView } from "react-intersection-observer";

const BigContainer = styled.div`
  margin: 0;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  background: linear-gradient(180deg, #222255 0%, #010c31 100%);
`;
const MainContainer = styled.div`
  margin: 0;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
const LeftContainer = styled.div`
  margin: 0;
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  padding-bottom: 100px;
  flex-wrap: wrap;

  @media (min-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
const RightContainer = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-radius: 15px;
  box-shadow: 1px 1px 6px black;
  margin-right: 20px;
  margin-top: 50px;
  padding: 0 15px;

  @media (min-width: 1000px) {
    width: 700px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 220px;
    padding-right: 30px;
    margin: 0;
  }
`;
const HelmContainer = styled.div`
  position: absolute;
  top: -120px;
  z-index: 99;
  @media (min-width: 1000px) {
    position: relative;
    top: 0;
    width: 500px;
  }
`;
const KeyContainer = styled.div`
  position: absolute;
  top: -90px;
  z-index: 99;
  @media (min-width: 1000px) {
    position: relative;
    top: 0;
    width: 500px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media (min-width: 1000px) {
    margin: 0;
  }
  align-items: flex-start;
`;
const NumberContainer = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    color: #00aaff;
    font-size: 45px;
    width: 50px;
    height: 220px;
    align-items: center;
  }
`;
const PanelContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 30px;
  @media (min-width: 900px) {
    &:nth-child(1) {
      margin-right: 100px;
    }
    &:nth-child(2n) {
      margin-right: 50px;
    }
  }
`;
export function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <BigContainer>
      <h1 style={{ marginBottom: "" }}>The technology behind it</h1>
      <MainContainer ref={ref} className={inView ? "opacity" : ""}>
        <LeftContainer>
          <PanelContainer>
            <NumberContainer>1</NumberContainer>
            <InfoContainer>
              <HelmContainer>
                <img width="100px" src={helm} />
              </HelmContainer>

              <TextContainer>
                <h3 style={{ marginBottom: 0 }}>Decentralized Identities</h3>
                <p style={{ fontSize: "17px" }}>
                  Unlike a wallet, a DID does not manage tokens. DIDs are
                  created for the sole purpose of identification and consist of
                  a public and private key pair. You can use DID like a stamp to
                  sign information and prove that it comes from you. That
                  information is packaged in what is called a verifiable
                  credential.
                </p>
              </TextContainer>
            </InfoContainer>
          </PanelContainer>
          <PanelContainer>
            <NumberContainer>2</NumberContainer>
            <InfoContainer>
              <HelmContainer>
                <img width="100px" src={message} />
              </HelmContainer>

              <TextContainer>
                <h3 style={{ marginBottom: 0 }}>Verifiable Credentials</h3>
                <p style={{ fontSize: "17px" }}>
                  Verifiable credentials are the cryptographic and digital
                  version of an ID card. When someone wants to know your age,
                  you typically give them a piece of ID like a driver's licence.
                  Verifiable credentials are more convenient as they are modular
                  (you can build them with any info you want) and they can be
                  transferred easily via the internet.
                </p>
              </TextContainer>
            </InfoContainer>
          </PanelContainer>
          <PanelContainer>
            <NumberContainer>3</NumberContainer>
            <InfoContainer>
              <KeyContainer>
                <img width="150px" src={issuer} />
              </KeyContainer>
              <TextContainer>
                <h3 style={{ marginBottom: 0 }}>Credentials Issuer</h3>
                <p style={{ fontSize: "17px" }}>
                  Trusted third parties can certify that your information is
                  accurate. For example, you could verify on a trusted app that
                  you own a given wallet. That app would send you a verifiable
                  credential acknowledging you as the owner of that wallet. From
                  then on, you’ll be able to send that verifiable credential as
                  a proof for others to see you own that wallet.
                </p>
              </TextContainer>
            </InfoContainer>
          </PanelContainer>
        </LeftContainer>
        <RightContainer>
          <img
            width={"100%"}
            style={{ maxWidth: "900px" }}
            src={moon}
            alt={"spaceship and a planet"}
          />
        </RightContainer>
      </MainContainer>
    </BigContainer>
  );
}
