import { Button, ChevronLeftIcon, ChevronRightIcon } from "@class101/ui";
import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";

const Wrapper = styled.div<{ current: string }>`
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
      width: ${({ current }) => current};
      height: 1px;
      background-color: white;
      transition: width 0.9s linear;
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

  useEffect(() => {
    if (prevIndex !== index) {
      setPrevIndex(index);
      setSec(0);
    }

    const interval = setInterval(() => {
      setSec((prev) => {
        if (prev >= time) {
          return 0;
        }
        return prev + 1;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [prevIndex, index, time]);

  return (
    <Wrapper current={(100 / time) * sec + "%"}>
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
