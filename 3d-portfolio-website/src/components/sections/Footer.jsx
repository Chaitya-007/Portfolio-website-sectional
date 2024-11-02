import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div``;
const FooterWrapper = styled.div``;
const Logo = styled.div``;
const Nav = styled.div``;
const NavLink = styled.a``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Chaitya</Logo>
        <Nav>
          <NavLink href="#About"> About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
