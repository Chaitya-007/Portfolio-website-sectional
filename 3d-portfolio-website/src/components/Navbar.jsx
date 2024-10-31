import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Bio } from "../data/constants";

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

const NavItems = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo to="\">Chaitya Portfolio</NavLogo>
      <NavItems>
        <NavLink href="#About"> About</NavLink>
        <NavLink href="#Skills">Skills</NavLink>
        <NavLink href="#Experience">Experience</NavLink>
        <NavLink href="#Projects">Projects</NavLink>
        <NavLink href="#Education">Education</NavLink>
      </NavItems>

      <ButtonContainer>
        <GithubButton href={Bio.github} target="_Blank">
          Github Profile
        </GithubButton>
      </ButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
