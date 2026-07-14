import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import { games } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 24px;
  padding: 8px 0;

  @media (max-width: 768px) {
    gap: 18px;
  }
`;

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9edcff;
  font-size: 0.82rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const SectionLabel = styled.span`
  width: 42px;
  height: 1px;
  background: linear-gradient(90deg, rgba(127, 211, 255, 0.02), rgba(127, 211, 255, 0.8));
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
`;

const MainPage: React.FC = () => (
  <GamesContainer>
    <SectionHeading>
      <SectionLabel />
      Featured work
    </SectionHeading>
    {games.map((game, index) => (
      <React.Fragment key={index}>
        <Game game={game} />
        {index !== games.length - 1 && <Seperator />}
      </React.Fragment>
    ))}
  </GamesContainer>
);

export default MainPage;
