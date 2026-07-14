import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Column } from "../Styles/StyledComponents";

const Container = styled(Column)`
  align-items: center;
  margin-top: 16px;
  gap: 18px;
  text-align: center;
`;

const Card = styled(Column)`
  align-items: center;
  gap: 16px;
  padding: 28px 24px;
  max-width: 760px;
  background: linear-gradient(135deg, rgba(9, 18, 34, 0.92), rgba(10, 20, 35, 0.78));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(16px);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid rgba(127, 211, 255, 0.45);
  object-fit: cover;

  @media (max-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

const AboutText = styled.p`
  line-height: 1.8;
  max-width: 680px;
  margin: 0;
  white-space: pre-line;
  color: #d7e8f8;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #03111f;
  background: linear-gradient(90deg, #8fe8ff, #5db7ff);
  text-decoration: none;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 10px 24px rgba(93, 183, 255, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(93, 183, 255, 0.35);
  }
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Card>
        <ProfileImage src={PersonalInfo.image} alt="Your Name" />
        <AboutText>
         {PersonalInfo.description}
        </AboutText>
        <CVButton href={`${PersonalInfo.cvUri}`} download>
          Download My CV
        </CVButton>
      </Card>
    </Container>
  );
};

export default AboutMe;