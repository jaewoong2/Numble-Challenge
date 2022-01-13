import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import Item from "../Slick/Item";
import Carousel from "./Carousel";
import ProgressBar from "./ProgressBar";
import Text from "./Text";

const Wrapper = styled.div<{ bgColor?: string }>`
  width: 100%;
  margin: 0px auto;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "blue")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
  z-index: 0;

  .bg-image {
    position: absolute;
    left: 2%;
    width: auto;
    height: 100%;
    display: flex;

    align-items: center;
    filter: blur(10px);

    img {
      width: auto;
      height: 90%;
    }
  }

  @media screen and (max-width: 640px) {
    .bg-image {
      position: absolute;
      left: 2%;
      width: auto;
      height: 100%;
      display: flex;

      align-items: center;
      filter: blur(10px);

      img {
        width: auto;
        height: 50%;
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 24px 0 24px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  justify-content: center;

  @media screen and (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

type dataType = {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  badge?: string;
  bgColor?: string;
};

interface TopCarouselProps {
  datas: dataType[];
}

const TopCarousel: React.VFC<TopCarouselProps> = ({ datas }) => {
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState<any>(undefined);

  const onChangeIndex = useCallback((index_: number) => {
    setIndex(index_);
  }, []);

  const onClickLeftButton = useCallback(() => {
    setIndex((prev) => {
      slider?.current?.slickPrev();
      if (prev === 0) {
        return datas.length - 1;
      }
      return prev - 1;
    });
  }, [datas, slider]);

  const onClickRightButton = useCallback(() => {
    setIndex((prev) => {
      slider?.current?.slickNext();
      if (prev === datas.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }, [datas, slider]);

  return (
    <Wrapper bgColor={datas[index].bgColor}>
      <div className="bg-image">
        <img src={datas[index].img} alt="current" />
      </div>
      <Container>
        <Item
          setSlider={setSlider}
          getIndex={(index) => onChangeIndex(index)}
          width="50%"
          height="auto"
          items={datas.map(({ img, title }) => ({ item: img, name: title }))}
        />
        <Text subTitle={<span>{datas[index].subtitle}</span>}>
          {datas[index].title}
        </Text>
        <ProgressBar
          index={index}
          length={datas.length}
          time={8}
          onClickLeftButton={onClickLeftButton}
          onClickRightButton={onClickRightButton}
        />
      </Container>
    </Wrapper>
  );
};

export default TopCarousel;
