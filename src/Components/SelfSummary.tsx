import React from "react";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "./LogoButton";

const SelfSummaryContainer = styled(Column)`
  gap: 14px;
  padding: 28px 30px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(135deg, rgba(8, 15, 26, 0.9), rgba(12, 21, 37, 0.72));
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(18px);

  @media (max-width: 768px) {
    padding: 20px 18px;
  }
`;

const TopRow = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
`;

const TitleRow = styled(Row)`
  gap: 12px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2.2rem;
  font-family: "PhoenixGaming", sans-serif;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(127, 211, 255, 0.14);
  color: #9edcff;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border: 1px solid rgba(127, 211, 255, 0.22);
`;

const Description = styled.p`
  font-size: 1.05rem;
  max-width: 760px;
  line-height: 1.7;
  margin: 0;
  color: #cfe4ff;
  font-family: "Oxanium", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const Logo = styled.img`
  height: 58px;
  width: 58px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

const SocialRow = styled(Row)`
  gap: 6px;
  flex-wrap: wrap;
`;

const SelfSummary: React.FC = () => {
  return (
    <SelfSummaryContainer>
      <TopRow>
        <TitleRow>
          <Logo src={`${process.env.PUBLIC_URL}/favicon.ico`} />
          <div>
            <Title>{PersonalInfo.name}</Title>
            <Badge>Game Developer</Badge>
          </div>
        </TitleRow>
        <SocialRow>
          <LogoButton source="/images/logos/github.png" size={56} margin={6} linkTo={PersonalInfo.links.github} />
          <LogoButton source="/images/logos/linkedIn.png" size={56} margin={6} linkTo={PersonalInfo.links.linkedIn} />
          <LogoButton source="/images/logos/itch.io.png" size={56} margin={6} linkTo={PersonalInfo.links.itchIO} />
        </SocialRow>
      </TopRow>
      <Description>{PersonalInfo.introduction}</Description>
    </SelfSummaryContainer>
  );
};

export default SelfSummary;
