import React from "react";
import { styled } from "styled-components";
import GameMedia from "./GameMedia";
import { Project as GameInterface } from "../types";
import GameInfo from "./GameInfo";
import { Row } from "../Styles/StyledComponents";

interface GameProps {
  game: GameInterface;
}

const GameContainer = styled(Row)`
  align-items: stretch;
  gap: 24px;
  padding: 20px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;

  & > * {
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 16px;
  }
`;

const Game: React.FC<GameProps> = ({ game }) => {
  return (
    <GameContainer>
      <GameInfo game={game} />
      <GameMedia media={game.media} />
    </GameContainer>
  );
};

export default Game;
