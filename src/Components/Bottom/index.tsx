import { Colors, PersonIcon } from "@class101/ui";
import styled from "@emotion/styled";
import React from "react";
import Category from "./Category";
import CategoryItem from "./Category/CategoryItem";

const Wrapper = styled.div`
  z-index: 2;
  width: 100%;

  footer {
    width: 100%;
    justify-content: flex-end;
    z-index: 2;

    a {
      z-index: 2;
      cursor: pointer;
    }

    display: flex;
    position: relative;
    padding-top: 20px;
    color: ${({ theme }) => theme.color.grayDarker};
    font-size: 12px;

    h4 {
      margin-right: 20px;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-top: 120px;
      border-top: 1px solid ${({ theme }) => theme.color.gray};
      padding-left: 32px;
    }
  }
`;

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${({ theme }) => theme.size.maxWidth}) {
    flex-basis: 50%;
  }
`;

type categoryType = {
  subject: string;
  title: string;
  href: string;
};

interface BottomProps {
  categories: categoryType[];
}

const Bottom: React.FC<BottomProps> = ({ categories }) => {
  return (
    <Wrapper>
      <Category title="인기 카테고리" subtitle="" more="">
        <CategoryWrapper>
          {categories.map((category) => (
            <CategoryItem {...category} />
          ))}
        </CategoryWrapper>
      </Category>
      <footer>
        <h4>numble:: 디자인 시스템 기반 CLASS101 클론 코딩 챌린지</h4>
        <PersonIcon size={14} fillColor={Colors.gray300} />
        <a
          href="https://github.com/jaewoong2/"
          target={"_blank"}
          rel="noreferrer"
        >
          <h4>@jaewoong2</h4>
        </a>
      </footer>
    </Wrapper>
  );
};

export default Bottom;
