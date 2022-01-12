import styled from "@emotion/styled";
import React from "react";
import Slick from "./Slick";

const SliderItem = styled.div<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  .image-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      max-width: 98%;
      height: auto;
      border-radius: 8px;
      height: auto;
    }
  }
`;

interface ItemsProps {
  items: {
    item: string;
    name: string;
  }[];
  width: string;
  height: string;
  getIndex: (index: number) => void;
}

const Item: React.VFC<ItemsProps> = ({ items, width, height, getIndex }) => {
  return (
    <Slick getIndex={getIndex} width={width} height={height}>
      {items.map(({ item, name }, index) => (
        <SliderItem width={width} height={height} key={index}>
          <div className="image-container">
            <img src={item} alt={name} />
          </div>
        </SliderItem>
      ))}
    </Slick>
  );
};

export default Item;
