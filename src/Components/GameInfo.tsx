import React from "react";
import { styled } from "styled-components";
import { Project as GameInterface } from "../types";
import LogoButton from "./LogoButton";
import { Column, Row } from "../Styles/StyledComponents";

interface GameInfoProps {
  game: GameInterface;
}

const GameInfoContainer = styled(Column)`
  gap: 12px;
`;

const GameTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GameDescription = styled.p`
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--muted);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const InfoTable = styled(Column)`
  gap: 6px;
  margin: 6px 0;
  font-size: 0.92rem;
  color: var(--text);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const InfoRow = styled(Row)`
  gap: 8px;
  flex-wrap: wrap;
`;

const InfoKey = styled.span`
  font-weight: 600;
  min-width: 78px;
  text-align: left;
  color: var(--text);
`;

const InfoValue = styled.span`
  color: var(--muted);
`;

const LinksContainer = styled(Row)`
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
`;

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
    return (
        <GameInfoContainer>
            <GameTitle>{game.name}</GameTitle>
            <GameDescription>{game.description}</GameDescription>

            <InfoTable>
                <InfoRow>
                    <InfoKey>Genres:</InfoKey>
                    <InfoValue>{game.genres.join(", ")}</InfoValue>
                </InfoRow>
                <InfoRow>
                    <InfoKey>Platforms:</InfoKey>
                    <InfoValue>{game.platforms.join(", ")}</InfoValue>
                </InfoRow>
                <InfoRow>
                    <InfoKey>Tools:</InfoKey>
                    <InfoValue>{game.tools.join(", ")}</InfoValue>
                </InfoRow>

                {game.source && <InfoRow>
                    <InfoKey>Source:</InfoKey>
                    <InfoValue >
                        <a href={game.source.url} target="_blank" rel="noopener noreferrer">
                            {game.source.name}
                        </a>
                    </InfoValue>
                </InfoRow>}
            </InfoTable>
            <LinksContainer>
                {game.links.map((link, index) => (
                    <LogoButton key={index} size={35} source={link.source} linkTo={link.url} />
                ))}
            </LinksContainer>
        </GameInfoContainer>
    );
};

export default GameInfo;
