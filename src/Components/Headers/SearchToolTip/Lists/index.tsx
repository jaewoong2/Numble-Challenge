import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  max-width: 676px;
  margin: auto;
  width: 100%;

  .title {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px;
    display: flex;
    align-items: center;
    font-weight: bold;
    color: rgb(26, 26, 26);
    margin-bottom: 12px;
  }

  .item-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .line {
    width: 100%;
    margin: 16px 0px 24px;
    border-top: 1px solid ${({ theme }) => theme.color.gray};
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    max-width: 100%;
  }
`;

interface Props {
  title: string;
  line: boolean;
  className?: string;
}

const Lists: React.FC<Props> = ({ children, title, line }) => {
  return (
    <Wrapper>
      <h3 className="title">{title}</h3>
      <div className="item-list">{children}</div>
      {line && <div className="line" />}
    </Wrapper>
  );
};

export default Lists;
