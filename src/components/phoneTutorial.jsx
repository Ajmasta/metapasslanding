import styled from "styled-components";
import React, { useState } from "react";
import phone1 from "../assets/phone1.svg";
import phone2 from "../assets/phone2.svg";
import phone3 from "../assets/phone3.svg";
import phone4 from "../assets/phone4.svg";

import { StepsBox } from "./stepsBox";
import android from "../assets/googlePlay.png";
const MainContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: 800px;
  }
  align-items: center;
`;
const PhoneContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const BigContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (max-width: 900px) {
    height: 800px;
  }
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(42, 64, 106, 0.69) 0%, #010c3d 100%);
`;
const Image = styled.img`
  width: 120px;
  height: 60px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: white;
  transition: 0.1s;
  cursor: pointer;
  font-size: 21px;
  font-weight: 600;
  &:hover {
    background-color: rgba(42, 64, 106, 0.69);
    color: white;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
const MainTitle = styled.h1`
  font-size: 48px;
  max-width: 500px;
  text-align: center;
`;
const Subtitle = styled.h3`
  font-size: 20px;
  max-width: 380px;
  text-align: center;
`;
const TextContainer = styled.div`
  color: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export function PhoneTutorial() {
  const [image, setImage] = useState(phone1);
  return (
    <BigContainer>
      <MainContainer>
        <LeftContainer>
          <PhoneContainer>
            <img width={"120%"} src={image} alt="phone tutorial" />
          </PhoneContainer>
        </LeftContainer>
        <RightContainer>
          <TextContainer>
            <MainTitle>All of your data in your own hands</MainTitle>
            <Subtitle>
              Create your Metapass in a few clicks with our app.
            </Subtitle>
          </TextContainer>
          <StepsBox setImage={setImage} image={image} />
          <ButtonContainer>
            <Button>Try it out</Button>

            <Image src={android} />
          </ButtonContainer>
        </RightContainer>
      </MainContainer>
    </BigContainer>
  );
}
