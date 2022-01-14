import { Badge, Colors } from "@class101/ui";
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
  position: relative;

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

  .badge {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 25px;
  }
`;

interface ItemsProps {
  items: {
    item: string;
    name: string;
    badge?: string;
  }[];

  width: string;
  height: string;
  getIndex: (index: number) => void;
  setSlider: React.Dispatch<any>;
}

const Item: React.VFC<ItemsProps> = ({
  setSlider,
  items,
  width,
  height,
  getIndex,
}) => {
  return (
    <Slick
      setSlider={setSlider}
      getIndex={getIndex}
      width={width}
      height={height}
    >
      {items.map(({ item, name, badge }, index) => (
        <SliderItem width={width} height={height} key={index}>
          <div className="image-container">
            <img src={item} alt={name} />
          </div>
          {badge ? (
            <Badge
              size={"md"}
              backgroundColor={Colors.red600}
              color={Colors.white}
              className="badge"
            >
              {badge}
            </Badge>
          ) : (
            ""
          )}
        </SliderItem>
      ))}
    </Slick>
  );
};

export default Item;
