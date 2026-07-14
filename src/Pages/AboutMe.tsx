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
  max-width: 720px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 96px;
    height: 96px;
  }
`;

const AboutText = styled.p`
  line-height: 1.7;
  max-width: 640px;
  margin: 0;
  white-space: pre-line;
  color: var(--muted);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 22px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #0c0e13;
  background: var(--accent);
  text-decoration: none;
  border: 1px solid var(--accent);
  border-radius: 8px;
  transition: filter 0.2s ease, transform 0.2s ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
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