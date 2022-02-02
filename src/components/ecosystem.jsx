import React, { useState } from "react";
import styled from "styled-components";

import snow from "../assets/snow.jpg";
import sky from "../assets/sky.jpg";
import data from "../assets/dataTools.svg";
import rewards from "../assets/rewards.svg";
import personalized from "../assets/dataPersonalized.svg";
import passive from "../assets/passive.svg";
import guild from "../assets/guild.svg";
import trophy from "../assets/trophy.svg";
import match from "../assets/match.svg";
import content from "../assets/content.svg";
import { useInView } from "react-intersection-observer";

const BigContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #010c31 0%, #010c31dd 100%);
`;
const MainContainer = styled.div`
  margin: 0;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  flex-wrap: wrap;
`;
const LeftContainer = styled.div`
  margin: 0;
  width: 50%;

  min-width: 300px;
  height: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;
const RightContainer = styled.div`
  margin: 0;

  width: 50%;
  height: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;
const MetanalyticsContainer = styled.div`
  width: 100%;
  margin-right: 50px;
  max-width: 550px;
  height: 650px;
  background: black;
  border-radius: 10px;
  background: linear-gradient(180deg, #7682f020 0%, #7682f080 100%),
    url(${snow});
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 30px;
  color: black;
  position: relative;
  @media (max-width: 900px) {
    max-width: 320px;
    height: 700px;
    margin: 0;
    margin-bottom: 30px;
  }
`;
const MetaHubContainer = styled.div`
  width: 100%;
  max-width: 550px;
  height: 650px;
  background: black;
  border-radius: 10px;
  background: linear-gradient(180deg, #00000040 0%, #00000080 100%), url(${sky});
  background-size: cover;
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 30px;
  color: white;
  position: relative;
  @media (max-width: 900px) {
    max-width: 320px;
    height: 700px;
  }
`;
const Label = styled.div`
  position: absolute;
  top: 0;
  right: -10px;
  width: 75px;
  height: 40px;
  background-color: #02236b;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateZ(35deg);
  border-radius: 10px;
  box-shadow: 1px 1px 2px black;
  color: #eeeeee;
`;
const InfoBoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  align-items: center;
  justify-content: center;
  width: 40%;
  text-align: center;
  transition: 0.2s ease all;
  &:hover {
    transform: scale(1.03);
  }
`;
const InfoTitle = styled.h2`
  margin: 0;
  max-width: 200px;
  font-size: 36px;
  padding-left: 10px;
`;
const MainSubtitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;
const MainTitle = styled.h1`
  font-size: 36px;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
`;
const InfoText = styled.h3`
  margin: 0;
  max-width: 80%;
  padding-left: 10px;
  font-size: 18px;
  font-weight: 400;
`;
const InfoTop = styled.h2`
  margin: 0;
  font-size: 18px;
`;
const InfoBottom = styled.p`
  margin: 0;
  font-size: 15px;
  height: 76px;
`;
const ImgContainer = styled.div`
  height: 150px;
  display: flex;
  align-items: flex-end;
`;
export function Ecosystem() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <BigContainer>
      <MainTitle>Become part of an entire ecosystem</MainTitle>
      <MainSubtitle>Powered by our $MTP token</MainSubtitle>

      <MainContainer ref={ref} className={inView ? "opacity" : ""}>
        <LeftContainer>
          <MetanalyticsContainer>
            <Label>Q2 2022</Label>
            <div>
              <InfoTitle>Metanalytics</InfoTitle>

              <InfoText>
                Our analytics platform where users monetize their data, and
                marketers and game developpers gain direct insights into the
                market.
              </InfoText>
            </div>
            <InfoBoxesContainer>
              <InfoContainer>
                <ImgContainer>
                  <img src={passive} width={150} />
                </ImgContainer>
                <InfoTop>Passive Income</InfoTop>
                <InfoBottom>
                  Earn passive income through opt-ins program to monetize your
                  data
                </InfoBottom>
              </InfoContainer>
              <InfoContainer>
                <ImgContainer>
                  <img src={rewards} width={150} />
                </ImgContainer>
                <InfoTop>Active Income</InfoTop>
                <InfoBottom>
                  Earn additional income by completing reward programs
                </InfoBottom>
              </InfoContainer>
              <InfoContainer>
                <ImgContainer>
                  <img src={data} width={150} />
                </ImgContainer>
                <InfoTop>Data Insights </InfoTop>
                <InfoBottom>
                  Access richer data and clearer insights for your marketing
                </InfoBottom>
              </InfoContainer>
              <InfoContainer>
                <ImgContainer>
                  <img src={personalized} width={150} height={150} />
                </ImgContainer>
                <InfoTop>Personalized Data</InfoTop>
                <InfoBottom>
                  Find and target users with very specific profiles
                </InfoBottom>
              </InfoContainer>
            </InfoBoxesContainer>
          </MetanalyticsContainer>
        </LeftContainer>
        <RightContainer>
          <MetaHubContainer>
            <Label>Q4 2022</Label>

            <div>
              <InfoTitle>Metahub</InfoTitle>
              <InfoText>
                Our media platform where you can showcase your identity.
                Socialize and earn a reputation that persists throughout the
                Metaverse.
              </InfoText>
            </div>
            <InfoBoxesContainer>
              <InfoContainer>
                <ImgContainer>
                  <img src={trophy} width={150} />
                </ImgContainer>
                <InfoTop>Trophy Room</InfoTop>
                <InfoBottom>
                  Display your NFTs and gaming achievements in one spot.
                </InfoBottom>
              </InfoContainer>
              <InfoContainer>
                <ImgContainer>
                  <img src={content} width={150} />
                </ImgContainer>
                <InfoTop>Content Platforms</InfoTop>
                <InfoBottom>
                  Share your ideas in forums and game reviews
                </InfoBottom>
              </InfoContainer>
              <InfoContainer>
                <ImgContainer>
                  <img src={match} width={150} />
                </ImgContainer>
                <InfoTop>Matchmaking tools </InfoTop>
                <InfoBottom>
                  Form connections with like-minded gamers
                </InfoBottom>
              </InfoContainer>
              <InfoContainer>
                <ImgContainer>
                  <img src={guild} width={150} height={150} />
                </ImgContainer>
                <InfoTop>Guild Management</InfoTop>
                <InfoBottom>
                  Establish and manage your guild's meta identity
                </InfoBottom>
              </InfoContainer>
            </InfoBoxesContainer>
          </MetaHubContainer>
        </RightContainer>
      </MainContainer>
    </BigContainer>
  );
}
