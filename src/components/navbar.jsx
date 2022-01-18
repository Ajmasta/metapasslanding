import styled from "styled-components";
import React from "react";

const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Whitepaper = styled.div`
  width: 150px;
  height: 50px;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weigth: 600;
  margin-right: 50px;
  &:hover {
    background-color: #666;
    cursor: pointer;
    color: #eee;
  }
`;
export function NavBar() {
  return (
    <NavBarContainer>
      <Whitepaper>Whitepaper</Whitepaper>
    </NavBarContainer>
  );
}
