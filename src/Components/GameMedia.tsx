import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import BigMedia from "./BigMedia";
import { MediaItem, MediaType } from "../types";
import { Column, Row } from "../Styles/StyledComponents";


export const GameMediaContainer = styled(Column)`
  align-items: end;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const LargeMediaWrapper = styled(Row) <{ $isFading: boolean }>`
  width: 100%;
  height: 320px;
  justify-content: center;
  align-items: center;
  opacity: ${({ $isFading }) => ($isFading ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const ThumbnailContainer = styled(Row)`
  width: 100%;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Thumbnails = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 70%;
  max-height: 140px;
  padding: 8px;
  scrollbar-width: thin;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 4px;
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Thumbnail = styled.img<{ $isSelected: boolean }>`
  width: 80px;
  max-height: 120px;
  min-height: 50px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 12px;
  border: 2px solid ${({ $isSelected }) => ($isSelected ? "#7fd3ff" : "rgba(255,255,255,0.14)")};
  box-shadow: ${({ $isSelected }) => ($isSelected ? "0 0 0 2px rgba(127, 211, 255, 0.2)" : "none")};
  transform: ${({ $isSelected }) => ($isSelected ? "translateY(-2px)" : "none")};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
`;

export const PlayIcon = styled.button`
  position: absolute;
  width: 34px;
  height: 34px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:before {
    content: "▶";
    margin-left: 2px;
  }
`;

export const Arrow = styled.button`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 10px;
  color: #f1f8ff;
  cursor: pointer;
  font-size: 18px;
  border-radius: 50%;
  transition: background 0.25s ease, transform 0.2s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

type GameMediaProps = {
  media: MediaItem[];
};

const getYouTubeThumbnail = (url: string) => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/);
  return match && match[1]
    ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg`
    : "/fallback-thumbnail.jpg";
};

const GameMedia: React.FC<GameMediaProps> = ({ media }) => {
  const thumbnailsContainerRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const updateMediaIndex = (newIndex: number) => {
    if (newIndex !== currentIndex) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsFading(false);
        const thumbnail = thumbnailRefs.current[newIndex];
        thumbnail?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      }, 150);
    }
  };

  const handleThumbnailClick = (index: number) => updateMediaIndex(index);
  const nextMedia = () => updateMediaIndex((currentIndex + 1) % media.length);
  const prevMedia = () => updateMediaIndex((currentIndex - 1 + media.length) % media.length);


  return (
    <GameMediaContainer>
      <LargeMediaWrapper $isFading={isFading}>
        <BigMedia source={media[currentIndex].source} type={media[currentIndex].type} />
      </LargeMediaWrapper>

      <ThumbnailContainer>
        <Arrow onClick={prevMedia}>◀&nbsp;</Arrow>
        <Thumbnails ref={thumbnailsContainerRef}>
          {media.map((item, index) => {
            const isYouTubeVideo = item.type === MediaType.YouTube;
            const thumbnailSrc = isYouTubeVideo ? getYouTubeThumbnail(item.source) : `${process.env.PUBLIC_URL}${item.source}`;

            return (
              <ThumbnailWrapper key={index}>
                <Thumbnail
                  id={`thumbnail${index}`}
                  ref={(el) => (thumbnailRefs.current[index] = el)}
                  src={thumbnailSrc}
                  $isSelected={index === currentIndex}
                  onClick={() => handleThumbnailClick(index)}
                />
                {isYouTubeVideo && <PlayIcon onClick={() => handleThumbnailClick(index)} />}
              </ThumbnailWrapper>
            );
          })}

        </Thumbnails>
        <Arrow onClick={nextMedia}>&nbsp;▶</Arrow>
      </ThumbnailContainer>
    </GameMediaContainer>
  );
};

export default GameMedia;
