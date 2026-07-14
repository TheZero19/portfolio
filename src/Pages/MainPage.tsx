import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import { games } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 20px;
  padding: 8px 0;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: var(--border);
`;

const MainPage: React.FC = () => (
  <GamesContainer>
      <SectionHeading>
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
