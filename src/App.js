import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { NavBar } from "./components/navbar";
import React from "react";
import { FirstPanel } from "./components/firstPanel";
import { PhoneTutorial } from "./components/phoneTutorial";
import { EasyToUse } from "./components/easyToUse";
import { Ecosystem } from "./components/ecosystem";
import { HowItWorks } from "./components/howItWorks";
const CanvasContainer = styled.div`
  width: 50%;
  height: 100%;
`;

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div style={{ height: "100vh" }} />}>
        <FirstPanel />
      </Suspense>
      <PhoneTutorial />
      <EasyToUse />
      <HowItWorks />

      <Ecosystem />
    </>
  );
}

export default App;
