import styled from "styled-components";
import React, { useState } from "react";
import phone1 from "../assets/phone1.svg";
import phone2 from "../assets/phone2.svg";
import phone3 from "../assets/phone3.svg";
import phone4 from "../assets/phone4.svg";
import { useInView } from "react-intersection-observer";

import { StepsBox } from "./stepsBox";
import android from "../assets/googlePlay.png";
const MainContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
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
    height: 1200px;
  }
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(42, 64, 106, 0.69) 0%, #010c3d 100%);
`;
const Image = styled.img`
  width: 120%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const ImageAndroid = styled.img`
  width: 120px;
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
const MobileHidden = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
const LargeHidden = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`;
export function PhoneTutorial() {
  const [image, setImage] = useState(phone1);
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <BigContainer>
      <MainContainer ref={ref} className={inView ? "opacity" : ""}>
        <LeftContainer>
          <PhoneContainer>
            <Image src={image} alt="phone tutorial" />
          </PhoneContainer>
        </LeftContainer>
        <RightContainer>
          <LargeHidden>
            <StepsBox setImage={setImage} image={image} />
          </LargeHidden>
          <TextContainer>
            <MainTitle>All of your data in your own hands</MainTitle>
            <Subtitle>
              Create your Metapass in a few clicks with our app.
            </Subtitle>
          </TextContainer>
          <MobileHidden>
            <StepsBox setImage={setImage} image={image} />
          </MobileHidden>
          <ButtonContainer>
            <Button>Coming Soon</Button>

            <ImageAndroid src={android} />
          </ButtonContainer>
        </RightContainer>
      </MainContainer>
    </BigContainer>
  );
}
