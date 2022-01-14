import { Button, ChevronLeftIcon, ChevronRightIcon } from "@class101/ui";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const ProgressAnimation = keyframes`
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
`;

const Wrapper = styled.div<{ current: string; reset: boolean }>`
  @media screen and (max-width: 640px) {
    display: none;
  }

  display: flex;
  position: absolute;
  left: 50%;
  margin-left: 52px;
  bottom: -5px;
  min-width: 40%;
  width: 45%;
  height: 50px;
  align-items: center;
  color: white;

  .progress-bar {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 10px 0 10px;
    width: 45%;
    height: 1px;
    background-color: #ffffff5e;
    position: relative;

    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";

      height: 1px;
      background-color: white;
      transition: width 0.9s linear;

      ${({ reset }) =>
        reset
          ? css`
              animation: ${ProgressAnimation} 8s linear infinite;
            `
          : css`
              animation: none;
            `}
    }
  }

  .index {
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: normal;
    padding: 0px 0px 0px 8px;
    border: none;
    font-size: 12px;
  }

  .btn {
    display: flex;

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
  }
`;

interface ProgressBarProps {
  index: number;
  length: number;
  time: number;
  onClickLeftButton: () => void;
  onClickRightButton: () => void;
}

const ProgressBar: React.VFC<ProgressBarProps> = ({
  index,
  length,
  time,
  onClickLeftButton,
  onClickRightButton,
}) => {
  const [sec, setSec] = useState(0);
  const [prevIndex, setPrevIndex] = useState(index);
  const [reset, setReset] = useState(true);

  useEffect(() => {
    if (prevIndex !== index) {
      setPrevIndex(index);
      setReset(false);
    }

    const timer = setTimeout(() => {
      if (reset === false) {
        setReset(true);
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [index, prevIndex, reset]);

  // useEffect(() => {
  //   if (prevIndex !== index) {
  //     setPrevIndex(index);
  //     setSec(0);
  //   }

  //   const interval = setInterval(() => {
  //     setSec((prev) => {
  //       if (prev >= time) {
  //         return 0;
  //       }
  //       return prev + 1;
  //     });
  //   }, 900);

  //   return () => clearInterval(interval);
  // }, [prevIndex, index, time]);

  return (
    <Wrapper reset={reset} current={(100 / time) * sec + "%"}>
      <span className="index">
        {index + 1} | {length}
      </span>
      <div className="progress-bar"></div>
      <div className="btn">
        <Button onClick={onClickLeftButton} size="sm">
          <ChevronLeftIcon size={24} fillColor="white"></ChevronLeftIcon>
        </Button>
        <Button onClick={onClickRightButton} size="sm">
          <ChevronRightIcon size={24} fillColor="white"></ChevronRightIcon>
        </Button>
      </div>
    </Wrapper>
  );
};

export default ProgressBar;
