import { Badge, Colors, TimerIcon } from "@class101/ui";
import { ArrowRight } from "@class101/ui/dist/Icon/export-legacy.generated";
import styled from "@emotion/styled";
import React, { useEffect } from "react";
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

const CheerLastComponent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgb(255, 77, 0);
  max-height: 100%;
  position: relative;

  .description-wrapper {
    padding: 24px;
    max-height: 100%;
    height: 330px;
    color: white;

    h4 {
      font-size: 24px;
      font-weight: bold;
      line-height: 34px;
      letter-spacing: -0.4px;
      margin: 0px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 0px;
    }
  }
  .arrow-right {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 10px;
    background-color: white;
    bottom: 20px;
    right: 20px;
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
  cheer?: {
    goal: number;
    score: number;
    finishDate: string; // timestamp
  };
  period?: {
    startDate: string; // yyyy-mm-dd
    finishDate: string; // yyyy-mm-dd
  };
};

interface ItemsProps {
  items: itemType[];
  width: string;
  height: string;
  timedeal: boolean;
  slidesToShow: number;
  badgeColor: string;
  topHeart?: boolean;
}

const Item: React.VFC<ItemsProps> = ({
  items,
  width,
  height,
  slidesToShow,
  timedeal,
  badgeColor,
  topHeart,
}) => {
  return (
    <Slick
      length={items[0].cheer ? items.length + 1 : items.length}
      width={width}
      height={height}
      slidesToShow={slidesToShow}
    >
      {items.map((item, index) => (
        <SliderItem width={width} height={height} key={index}>
          <Card
            topHeart={topHeart}
            badgeColor={badgeColor}
            timedeal={timedeal}
            {...item}
          />
        </SliderItem>
      ))}
      {items[0].cheer ? (
        <SliderItem width={"100%"} height={"auto"} key={items.length}>
          <Card
            badgeColor={badgeColor}
            timedeal={timedeal}
            {...items[0]}
            LastComponent={
              <CheerLastComponent>
                <div className="description-wrapper">
                  <h4>
                    더 많은 클래스를 <br /> 응원해보세요
                  </h4>
                  <span>클래스 더보기</span>
                </div>
                <ArrowRight className="arrow-right" />
              </CheerLastComponent>
            }
          />
        </SliderItem>
      ) : (
        ""
      )}
    </Slick>
  );
};

export default Item;
