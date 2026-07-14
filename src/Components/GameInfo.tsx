import React from "react";
import { styled } from "styled-components";
import { Game as GameInterface } from "../types";
import LogoButton from "./LogoButton";
import { Column, Row } from "../Styles/StyledComponents";

interface GameInfoProps {
  game: GameInterface;
}

const GameInfoContainer = styled(Column)`
  gap: 12px;
`;

const GameTitle = styled.h1`
  font-family: "ZenDots", sans-serif;
  font-size: 1.8rem;
  color: #7fd3ff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }
`;

const GameDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: #dbeafe;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const InfoTable = styled(Column)`
  gap: 8px;
  margin: 8px 0 4px;
  font-size: 0.95rem;
  color: #c2d7ef;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const InfoRow = styled(Row)`
  gap: 8px;
  flex-wrap: wrap;
`;

const InfoKey = styled.span`
  font-weight: 700;
  min-width: 78px;
  text-align: left;
  color: #f6fbff;
`;

const InfoValue = styled.span`
  color: #8ea8c2;
`;

const LinksContainer = styled(Row)`
  gap: 10px;
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
                    <InfoKey>Engine:</InfoKey>
                    <InfoValue>{game.tools}</InfoValue>
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
