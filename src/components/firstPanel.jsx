import styled from "styled-components";
import { keyframes } from "styled-components";

import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useState } from "react";
import React from "react";
import { Earth } from "./threeDCard";
import { BoxContainer, boxContainer } from "./boxContainer";
import { PhoneTutorial } from "./phoneTutorial";
import { TextureLoader } from "three";
import metapass1 from "../assets/metapass1.png";
import metapass3 from "../assets/metapass3.png";
import metapass4 from "../assets/metapass4.png";
import metapass5 from "../assets/metapass5.png";

const appearAnimation = keyframes`
0% {opacity:0}
100% {opacity:1}
`;
const CanvasContainer = styled.div`
  width: 450px;
  height: 500px;
  min-width: 300px;
  margin: 0;
`;
const TextContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
const MainContainer = styled.div`
  padding-top: 80px;
  width: 100%;
  @media (max-width: 850px) {
    height: 1000px;
  }
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  animation: ${appearAnimation} 2s forwards;
`;
const BigContainer = styled.div`
  display: flex;
  height: 700px;
  @media (max-width: 850px) {
    height: 1100px;
  }
  flex-direction: column;
  background: linear-gradient(180deg, #010c31 0%, rgba(42, 64, 106, 0.89) 100%);
`;
const MainTitle = styled.h1`
  font-size: 36px;
  max-width: 380px;
  text-align: center;
`;
const Subtitle = styled.h3`
  font-size: 20px;
  max-width: 380px;
  text-align: center;
`;

const ImagePicker = styled.div`
  width: 60px;
  height: 80px;
  cursor: pointer;
  margin-left: 10px;
  border: 1px white solid;
  &:hover {
    box-shadow: 2px 2px 8px;
  }
`;
const PickerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export function FirstPanel() {
  const [colorMap, metaMap, aiMap, apeMap] = useLoader(TextureLoader, [
    metapass1,

    metapass3,
    metapass4,
    metapass5,
  ]);

  const [texture, setTexture] = useState(aiMap);

  return (
    <Suspense fallback={null}>
      <BigContainer>
        <MainContainer>
          <TextContainer>
            <MainTitle>Decentralized Identity for the Metaverse</MainTitle>
            <Subtitle>
              Your pass to access all Web3 applications safely and
              transparently.
            </Subtitle>
            <BoxContainer />
          </TextContainer>
          <CanvasContainer>
            <Canvas shadows={true}>
              <Suspense fallback={null}>
                <Earth texture={texture} setTexture={setTexture} />
              </Suspense>
            </Canvas>
            <PickerContainer>
              <ImagePicker
                style={texture === aiMap ? { boxShadow: "4px 4px 8px" } : {}}
                onClick={() => setTexture(aiMap)}
              >
                <img width={"60px"} height={"80px"} src={metapass4} />
              </ImagePicker>
              <ImagePicker
                style={texture === colorMap ? { boxShadow: "4px 4px 8px" } : {}}
                onClick={() => setTexture(colorMap)}
              >
                <img width={"60px"} height={"80px"} src={metapass1} />
              </ImagePicker>

              <ImagePicker
                style={texture === metaMap ? { boxShadow: "4px 4px 8px" } : {}}
                onClick={() => setTexture(metaMap)}
              >
                <img width={"60px"} height={"80px"} src={metapass3} />
              </ImagePicker>
              <ImagePicker
                style={texture === apeMap ? { boxShadow: "2px 2px 8px" } : {}}
                onClick={() => setTexture(apeMap)}
              >
                <img width={"60px"} height={"80px"} src={metapass5} />
              </ImagePicker>
            </PickerContainer>
          </CanvasContainer>
        </MainContainer>
      </BigContainer>
    </Suspense>
  );
}
