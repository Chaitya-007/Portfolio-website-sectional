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
`;
const NavLogo = styled(LinkR)``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo to="\">
        <a style={{ color: "white" }}>GFG</a>
      </NavLogo>
    </NavbarContainer>
  );
};

export default Navbar;
