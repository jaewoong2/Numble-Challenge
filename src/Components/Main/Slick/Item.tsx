import { Badge, Colors, TimerIcon } from "@class101/ui";
import styled from "@emotion/styled";
import React from "react";
import Card from "./Card";
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
    flex-direction: column;
    align-items: center;
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

type itemType = {
  id?: number;
  title?: string;
  creator?: string;
  img?: string;
  like?: number;
  thumsUp?: number; // 없을 시 null
  price?: {
    originalPrice: number;
    salePrice: number;
    installment: number | undefined; // 할부 개월 수 // 0일 시 표시하지 않음
  };
  coupon?: number; // 없을 시 null // number만원 쿠폰
};

interface ItemsProps {
  items: itemType[];
  width: string;
  height: string;
  timedeal: boolean;
  slidesToShow: number;
  badgeColor: string;
}

const Item: React.VFC<ItemsProps> = ({
  items,
  width,
  height,
  slidesToShow,
  timedeal,
  badgeColor,
}) => {
  return (
    <Slick
      length={items.length}
      width={width}
      height={height}
      slidesToShow={slidesToShow}
    >
      {items.map((item, index) => (
        <SliderItem width={width} height={height} key={index}>
          <Card badgeColor={badgeColor} timedeal={timedeal} {...item} />
        </SliderItem>
      ))}
    </Slick>
  );
};

export default Item;