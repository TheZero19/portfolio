import React from "react";
import { styled } from "styled-components";
import GameMedia from "./GameMedia";
import { Game as GameInterface } from "../types";
import GameInfo from "./GameInfo";
import { Row } from "../Styles/StyledComponents";

interface GameProps {
  game: GameInterface;
}

const GameContainer = styled(Row)`
  align-items: stretch;
  gap: 24px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(9, 18, 34, 0.86), rgba(10, 16, 28, 0.68));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(16px);

  & > * {
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 18px;
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
