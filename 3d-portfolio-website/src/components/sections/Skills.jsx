import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div``;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>
          <Desc>
            Here are some of my skills on which I have bee working past 3 years.
          </Desc>
        </Title>
      </Wrapper>
    </Container>
  );
};

export default Skills;
