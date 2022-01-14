import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100px;

  .flex-box {
    color: white;
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;

    @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
      .title {
        font-size: 18px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: -0.45px;
        margin: 0px;
        color: inherit;
        margin-left: 32px;
      }

      .sub {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.45px;
        margin: 0px 0px 0px 6px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-weight: bold;
        color: inherit;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      max-width: 100%;

      height: 64px;

      .title {
        max-width: 100%;
        padding-left: 32px;
        font-size: 11px;
        font-weight: normal;
        line-height: 16px;
        letter-spacing: normal;
        margin: 0px;
        color: inherit;
      }

      .sub {
        padding-left: 32px;

        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 0px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-weight: bold;
        color: inherit;
      }
    }
  }
`;

interface BaanerProps {
  subTitle: string;
  bgColor: string;
}

const Banner: React.FC<BaanerProps> = ({ children, subTitle, bgColor }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <a href="/">
        <div className="flex-box">
          <div className="title">{children}</div>
          <div className="sub">{subTitle}</div>
        </div>
      </a>
    </Wrapper>
  );
};

export default Banner;
