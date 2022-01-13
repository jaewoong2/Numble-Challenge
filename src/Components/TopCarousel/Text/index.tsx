import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 48px;

  .title {
    width: 100%;
    margin-top: 10px;
    display: flex;
    white-space: pre-line;
    -webkit-box-align: center;
    align-items: center;
    max-width: 380px;
    color: rgb(255, 255, 255);
    font-size: 34px;
    line-height: 44px;
    font-weight: bold;
    letter-spacing: -0.02rem;
    word-break: keep-all;
  }

  .sub {
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
`;

interface TextProps {
  subTitle: React.ReactNode | string;
}

const Text: React.FC<TextProps> = ({ children, subTitle }) => {
  return (
    <Wrapper>
      <div className="title ">{children}</div>
      <div className="title sub">{subTitle}</div>
    </Wrapper>
  );
};

export default Text;
