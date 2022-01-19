import React, { useState } from "react";
import styled from "styled-components";
import lock from "../assets/lockIcon.svg";
import ecometa from "../assets/ecometapass.svg";
const BigContainer = styled.div`
  margin: 0;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #010c31 0%, #222255 100%);
`;
const MainContainer = styled.div`
  margin: 0;
  margin-top: 10px;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 100px;
`;
const LeftContainer = styled.div`
  margin: 0;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;
const RightContainer = styled.div`
  margin: 0;
  width: 100%;
  min-height: 567px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const InfoBox = styled.div`
  display: flex;
  width: 500px;
  cursor: pointer;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;
const ImageContainer = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;
const DisplayContainer = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export function Ecosystem() {
  const [active, setActive] = useState(ecometa);
  return (
    <BigContainer>
      <h1>Become part of an entire ecosystem</h1>
      <MainContainer>
        <LeftContainer>
          <InfoBox
            style={
              active === ecometa
                ? { backgroundColor: "rgba(255, 255, 255, 0.1)" }
                : {}
            }
            onClick={() => setActive(ecometa)}
          >
            <ImageContainer src={lock} />
            <TextBox>
              <h3>Metapass</h3>
              <p>
                Our phone app that can be used like a mobile wallet. Instead of
                holding all your assets, you can own and hold onto all your data
                to easily share and connect with Web3 apps securely.
              </p>
            </TextBox>
          </InfoBox>
          <InfoBox
            style={
              active !== ecometa
                ? { backgroundColor: "rgba(255, 255, 255, 0.1)" }
                : {}
            }
            onClick={() => setActive(null)}
          >
            <ImageContainer src={lock} />
            <TextBox>
              <h3>Metanalytics</h3>
              <p>
                Our analytics platform. Users will be able to voluntariy opt-in
                surveys to earn passive income. Advertisers and game developpers
                will be able to get feedback and clear analytics.
              </p>
            </TextBox>
          </InfoBox>
        </LeftContainer>
        <RightContainer>
          <DisplayContainer src={active} />
        </RightContainer>
      </MainContainer>
    </BigContainer>
  );
}
