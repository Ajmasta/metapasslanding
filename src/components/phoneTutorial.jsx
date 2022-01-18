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
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  @media (max-width: 900px) {
    flex-direction: column;
    height: 800px;
  }
  align-items: center;
`;
const PhoneContainer = styled.div`
  width: 384px;
  height: 560px;
`;
const BigContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    height: 800px;
  }
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(42, 64, 106, 0.89) 0%, #010c31 100%);
`;
const Image = styled.img`
  width: 120px;
  height: 60px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: white;
  transition: 0.1s;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: #010c31;
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

export function PhoneTutorial() {
  const [image, setImage] = useState(phone1);
  return (
    <BigContainer>
      <MainContainer>
        <PhoneContainer>
          <img src={image} alt="phone tutorial" />
        </PhoneContainer>
        <StepsBox setImage={setImage} image={image} />
      </MainContainer>
      <ButtonContainer>
        <Button>Try it out</Button>

        <Image src={android} />
      </ButtonContainer>
    </BigContainer>
  );
}
