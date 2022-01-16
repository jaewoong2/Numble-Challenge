import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 25%;

  a {
    display: flex;
    flex-direction: column;
    background-color: rgb(248, 248, 248);
    border-radius: 6px;
    text-align: center;
    margin: 0 12px 0 12px;
    margin-bottom: 20px;

    padding: 24px 0px 26px;

    h3 {
      font-size: 14px;
      font-weight: normal;
      color: rgb(26, 26, 26);
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 0px;
    }

    h4 {
      font-size: 18px;
      font-weight: bold;
      color: rgb(26, 26, 26);
      line-height: 24px;
      letter-spacing: -0.45px;
      margin: 0px;
      margin-top: 4px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.size.maxWidth}) {
    flex-basis: 50%;
  }
`;

interface CategoryItemProps {
  subject: string;
  title: string;
  href: string;
}

const CategoryItem: React.VFC<CategoryItemProps> = ({
  subject,
  title,
  href,
}) => {
  return (
    <Wrapper>
      <a href={href}>
        <h3>{subject}</h3>
        <h4>{title}</h4>
      </a>
    </Wrapper>
  );
};

export default CategoryItem;
