import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;

  .titles {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 24px;
      color: rgb(26, 26, 26);
    }

    .title,
    .more {
      width: 100%;
      cursor: pointer;
      line-height: 34px;
      font-weight: bold;
      letter-spacing: -0.4px;
      margin: 0px;
    }

    .more {
      display: flex;
      justify-content: flex-end;
      margin-left: 32px;
      font-weight: bold;
      font-size: 14px;
      color: ${({ theme }) => theme.color.grayDarker};
      align-items: flex-end;
    }

    .subtitle {
      font-size: 14px;
      font-weight: normal;
      color: rgb(162, 162, 162);
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 4px 0px 0px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    .titles {
      padding: 0;
      margin: 0;
      .title {
        padding: 0;
        margin: 0;
        margin-left: 32px;
      }
      .more {
        display: none;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.device.mobile}) {
    .titles {
      .more {
        display: none;
      }
    }
  }
`;

interface CardSectionProps {
  title: string;
  subtitle: string;
  more: string;
}

const Category: React.FC<CardSectionProps> = ({
  children,
  title,
  subtitle,
  more,
}) => {
  return (
    <Wrapper>
      <TitleContainer>
        <div className="titles">
          <h2 className="title">
            {title} <br /> <p className="subtitle">{subtitle}</p>
          </h2>
          <h3 className="more">{more}</h3>
        </div>
      </TitleContainer>
      {children}
    </Wrapper>
  );
};

export default Category;
