import styled from "styled-components";
import React from "react";
import lockIcon from "../assets/lockIcon.svg";
import dataIcon from "../assets/data.svg";
import trustIcon from "../assets/trust.svg";
import blockIcon from "../assets/blockWhiteIcon.svg";
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 900px) {
    width: 300px;
    justify-content: center;
  }
`;
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 130px;
  transition: 0.25s all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0;

  &:hover {
    box-shadow: 2px 1px 6px black;
    cursor: default;
  }
`;

export function BoxContainer() {
  return (
    <MainContainer>
      <Container>
        <img src={lockIcon} />
        <p>Don't compromise your wallet</p>
      </Container>

      <Container>
        <img src={dataIcon} width={45} />
        <p>Own all of your data forever</p>
      </Container>
      <Container>
        <img src={trustIcon} />
        <p>Build trust without oversharing</p>
      </Container>

      <Container>
        <img src={blockIcon} width={45} />
        <p>Works with any blockchain</p>
      </Container>
    </MainContainer>
  );
}
