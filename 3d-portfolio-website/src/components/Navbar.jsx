import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

// You can create your custome components using styled-components
const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const NavLogo = styled(LinkR)`
  padding: 0 6px;
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      Chaitya
      <NavLogo to="\"></NavLogo>
    </NavbarContainer>
  );
};

export default Navbar;
