import styled from "styled-components";
import React, { useState } from "react";

import phone1 from "../assets/phone1.svg";
import phone2 from "../assets/phone2.svg";
import phone3 from "../assets/phone3.svg";

import phone4 from "../assets/phone4.svg";

const MainContainer = styled.div`
  height: 150px;
  display: flex;

  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  align-items: center;
  justify-content: flex-start;
`;
const Circle = styled.div`
  border-radius: 3px;
  transform: rotateZ(45deg);
  background-color: #ffffff;
  height: 10px;
  width: 10px;
  align-self: center;
  &:hover {
    transform: scale(1.2);
  }
`;
const CircleContainer = styled.div`
  height: 30px;
  width: 33px;
  @media (max-width: 900px) {
    display: none;
  }
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  height: 90px;
  width: 100px;
  border-radius: 10px;
  color: white;
  display: flex;
  @media (max-width: 900px) {
    margin-right: 10px;
    margin-top: 5px;
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  cursor: pointer;
`;
const TitleBox = styled.h3`
  margin: 0;
`;
const TextBox = styled.p`
  margin: 0;
  padding: 0px 2px;
`;
export function StepsBox({ setImage, image }) {
  return (
    <MainContainer>
      <Box
        style={image === phone1 ? { backgroundColor: "rgba(0,0,0,0.7)" } : {}}
        onMouseEnter={() => {
          setImage(phone1);
        }}
      >
        <TitleBox>1</TitleBox>
        <TextBox>Create Your DID</TextBox>
      </Box>
      <CircleContainer>
        <Circle />
      </CircleContainer>
      <Box
        style={image === phone2 ? { backgroundColor: "rgba(0,0,0,0.7)" } : {}}
        onMouseEnter={() => {
          setImage(phone2);
        }}
      >
        <TitleBox>2</TitleBox>
        <TextBox>Connect to a Web3 app</TextBox>
      </Box>
      <CircleContainer>
        <Circle />
      </CircleContainer>
      <Box
        style={image === phone3 ? { backgroundColor: "rgba(0,0,0,0.7)" } : {}}
        onMouseEnter={() => {
          setImage(phone3);
        }}
      >
        <TitleBox>3</TitleBox>
        <TextBox>Send the info you want</TextBox>
      </Box>
      <CircleContainer>
        <Circle />
      </CircleContainer>
      <Box
        style={image === phone4 ? { backgroundColor: "rgba(0,0,0,0.7)" } : {}}
        onMouseEnter={() => {
          setImage(phone4);
        }}
      >
        <TitleBox>4</TitleBox>
        <TextBox>Manage all your data</TextBox>
      </Box>
    </MainContainer>
  );
}
