import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div<{ width: string }>`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    display: flex;
    position: fixed;
    height: 60px;
    left: 0;
    bottom: 0;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 1px, rgb(0 0 0 / 10%) 0px 16px 30px 4px;
    max-width: inherit;
    z-index: 1999;
    marign-right: 20px;
    width: ${({ width }) => width};
    align-items: center;

    .container {
      max-width: ${({ theme }) => theme.device.tablet};
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
  }
`;

interface BottomNavProps {
  width: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ children, width }) => {
  return (
    <Wrapper width={width}>
      <div className="container">{children}</div>
    </Wrapper>
  );
};

export default BottomNav;
