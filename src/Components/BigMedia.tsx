import React, { useState } from "react";
import { styled } from "styled-components";
import { MediaItem, MediaType } from "../types";
import { Row } from "../Styles/StyledComponents";

const MediaWrapper = styled(Row)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const MediaIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 18px;
  background: #030712;

  @media (max-width: 768px) {
    min-height: 220px;
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: contain;
  cursor: pointer;
  border-radius: 18px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const PopupImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    max-width: 96%;
    max-height: 96%;
  }
`;

const BigMedia: React.FC<MediaItem> = ({ source, type }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    if (type === MediaType.Image) {
      setIsPopupOpen(true);
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    return`${url}?autoplay=1&mute=1`;
  };

  return (
    <>
      <MediaWrapper onClick={handleClick}>
        {type === MediaType.YouTube ? (
          <MediaIframe
            src={getYouTubeEmbedUrl(source)}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <MediaImage src={`${process.env.PUBLIC_URL}${source}`} alt="Game Media" />
        )}
      </MediaWrapper>

      {isPopupOpen && (
        <PopupOverlay onClick={() => setIsPopupOpen(false)}>
          <PopupImage src={`${process.env.PUBLIC_URL}${source}`} alt="Enlarged Media" />
        </PopupOverlay>
      )}
    </>
  );
};

export default BigMedia;
