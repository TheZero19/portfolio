import React from "react";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "./LogoButton";

const SelfSummaryContainer = styled(Column)`
  gap: 16px;
  padding: 24px;
  border: 1px solid var(--border);
  background: var(--panel);
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

const TopRow = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

const TitleRow = styled(Row)`
  gap: 14px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 4px;
  color: var(--muted);
  font-size: 0.85rem;
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 720px;
  line-height: 1.6;
  margin: 0;
  color: var(--muted);

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.55;
  }
`;

const Logo = styled.img`
  height: 52px;
  width: 52px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

const SocialRow = styled(Row)`
  gap: 4px;
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
