import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 48px;

  .title {
    position: absolute;
    top: 0;

    min-width: 35%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    white-space: pre-line;
    max-width: 380px;
    color: rgb(255, 255, 255);
    font-size: 34px;
    line-height: 44px;
    font-weight: bold;
    letter-spacing: -0.02rem;
    word-break: keep-all;
  }

  .sub {
    width: 100%;
    display: flex;
    margin: 10px 0px 0px;
    white-space: pre-line;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    line-height: 26px;
    max-width: 300px;
    font-weight: normal;
    flex-direction: column;

    span {
      width: 100%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    .title {
      font-size: 24px;
      line-height: 32px;
      max-width: 240px;
      font-weight: 600;
    }

    .sub {
      font-size: 14px;
      margin-top: 6px;
      line-height: 21px;
      max-width: 300px;
    }
  }

  @media screen and (max-width: 640px) {
    .title {
      position: relative;
    }
  }
`;

interface TextProps {
  subTitle: React.ReactNode | string;
}

const Text: React.FC<TextProps> = ({ children, subTitle }) => {
  return (
    <Wrapper>
      <div className="title ">
        {children}
        <div className="sub">{subTitle}</div>
      </div>
    </Wrapper>
  );
};

export default Text;
