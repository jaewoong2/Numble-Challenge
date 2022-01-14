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
    .subtitle {
      width: 100%;
      cursor: pointer;
      line-height: 34px;
      font-weight: bold;
      letter-spacing: -0.4px;
      margin: 0px;
    }

    .subtitle {
      display: flex;
      justify-content: flex-end;
      margin-left: 32px;
      font-weight: bold;
      font-size: 14px;
      color: ${({ theme }) => theme.color.grayDarker};
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
      .subtitle {
        display: none;
      }
    }
  }
`;

interface CardSectionProps {
  title: string;
  subtitle: string;
}

const CardSection: React.FC<CardSectionProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <Wrapper>
      <TitleContainer>
        <div className="titles">
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{subtitle}</h3>
        </div>
      </TitleContainer>
      {children}
    </Wrapper>
  );
};

export default CardSection;
