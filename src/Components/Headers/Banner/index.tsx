import React from "react";
import styled from "@emotion/styled";
import { Button, CloseIcon } from "@class101/ui";

type wrapperType = {
  fontColor: string;
  backgroundColor: string;
};

const Wrapper = styled.div<wrapperType>`
  width: 100%;
  display: flex;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 2000;

  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: cneter;
  // max-width themeing needed
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 6px 0 6px 0;

  // themeing needed
  @media screen and (max-width: ${({ theme }) => theme.size.maxWidth}) {
    margin: 0 32px 0 32px;
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    margin: 0 16px 0 16px;
  }

  // themeing needed
  .text-content {
    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px;
  }

  button {
    color: rgb(255, 255, 255);
    background-color: transparent;
    width: 28px;
    height: 28px;
    &:hover {
      background-color: rgba(58, 58, 58, 0.2);
      text-decoration-line: none;
    }
  }
`;

interface BannerProps {
  fontColor: string;
  backgroundColor: string;
  onClickBanner: () => void;
  onClickCloseButton: () => void;
}

/** children is text content for banner */
const Banner: React.FC<BannerProps> = ({
  children,
  onClickCloseButton,
  onClickBanner,
  ...props
}) => {
  return (
    <Wrapper onClick={onClickBanner} {...props}>
      <Container>
        <div className="text-content">{children}</div>
        <Button size="sm" onClick={onClickCloseButton}>
          <CloseIcon size={18} fillColor="white" />
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Banner;
