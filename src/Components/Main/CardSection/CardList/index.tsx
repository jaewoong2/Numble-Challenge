import { Caption1, Card, Colors } from "@class101/ui";
import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
`;

type listType = {
  id: number;
  title: string;
  creator: string;
  img: string;
  like: number;
  thumsUp: number; // 없을 시 null
  price: {
    originalPrice: number;
    salePrice: number;
    installment: number; // 할부 개월 수 // 0일 시 표시하지 않음
  };
  coupon: number; // 없을 시 null // number만원 쿠폰
};

interface CardListProps {
  lists: listType[];
}

const CardList: React.VFC<CardListProps> = ({ lists }) => {
  return (
    <Wrapper>
      {lists.map((list) => (
        <Card
          title={list.title}
          coverImage={list.img}
          to={"/"}
          extraBottom={
            <div>
              <Caption1 color={Colors.gray400}>타임딜 종료까지: </Caption1>
              <Caption1 color={Colors.gray400}>{list.creator}</Caption1>
              <div>
                <>하트:{list.like}</>
                <>텀업:{list.thumsUp}</>
              </div>
            </div>
          }
        />
      ))}
    </Wrapper>
  );
};

export default CardList;
