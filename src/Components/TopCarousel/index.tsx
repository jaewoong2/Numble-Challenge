import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import Item from "../Slick/Item";
import Carousel from "./Carousel";

const Wrapper = styled.div<{ bgColor?: string }>`
  width: 100%;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0px auto;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "blue")};
`;

const Container = styled.div`
  width: 100%;
  margin: 0 24px 0 24px;
  display: flex;
  align-items: center;
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

  const onChangeIndex = useCallback((index_: number) => {
    setIndex(index_);
  }, []);

  return (
    <Wrapper bgColor={datas[index].bgColor}>
      <Container>
        <Item
          getIndex={(index) => onChangeIndex(index)}
          width="50%"
          height="auto"
          items={datas.map(({ img, title }) => ({ item: img, name: title }))}
        />
        <div>
          {datas[index].title}
          <div>{datas[index].subtitle}</div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default TopCarousel;
