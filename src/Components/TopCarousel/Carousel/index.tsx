import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  overflow: hidden;
  user-select: none;
  z-index: 1;
`;

const ImageContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 8px;
  margin-right: 20px;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 100%;
    border-radius: 8px;
    pointer-events: none;
  }
`;

interface CarouselProps {
  imgs: string[];
}

const Carousel: React.VFC<CarouselProps> = ({ imgs }) => {
  return (
    <Wrapper>
      {imgs.map((img) => (
        <ImageContainer>
          <img src={img} alt="src" />
        </ImageContainer>
      ))}
    </Wrapper>
  );
};

export default Carousel;
