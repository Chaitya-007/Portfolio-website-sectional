import React from "react";
import styled from "styled-components";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../data/constants";

const Container = styled.div`
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  // background-color: blue;
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

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experience = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My working experience as a software engineer and working copanies and
          projects.
        </Desc>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <>Hi</>
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
