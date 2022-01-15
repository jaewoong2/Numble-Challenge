import { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import React from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, ChevronLeftIcon, ChevronRightIcon } from "@class101/ui";

const SlideWrapper = styled.section<{
  width: string;
  button: "Both" | "Right" | "Left";
  height: string;
}>`
  margin-top: 24px;
  position: relative;
  width: ${({ width }) => width};

  .slick-slider {
    min-width: ${({ theme }) => theme.device.tablet};
  }
  * {
    &:focus {
      outline: none;
      border: none;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 70%;
    margin-left: 10%;
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    padding: 0;
    background-color: transparent;

    &:hover {
      background-color: rgba(58, 58, 58, 0.2);
      text-decoration-line: none;
    }
  }

  .nextArrow {
    display: ${({ button }) =>
      button === "Both" ? "block" : button === "Right" ? "block" : "none"};
  }
  .prevArrow {
    display: ${({ button }) =>
      button === "Both" ? "block" : button === "Left" ? "block" : "none"};
  }
`;

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;

  slidesToShow?: number;

  width: string;
  height: string;

  length: number;
}

function Slick({
  children,
  className,
  speed = 700,
  width,
  slidesToShow = 4,
  height,
  length,
}: sliderProps) {
  const [button, setButton] = useState<"Left" | "Both" | "Right">("Right");

  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: false,
      speed: speed,
      className: "center",
      arrows: true,
      slidesToShow: slidesToShow,
      autoplay: false,
      swipeToSlide: true,
      nextArrow: (
        <Button size="sm">
          <ChevronRightIcon fillColor="black" className="nextArrow" />
        </Button>
      ),
      prevArrow: (
        <Button>
          <ChevronLeftIcon fillColor="black" className="prevArrow" />
        </Button>
      ),
      afterChange: (index) => {
        if (index === 0) {
          setButton("Right");
        } else if (index === length - 4) {
          setButton("Left");
        } else {
          setButton("Both");
        }
      },
    }),
    [speed, slidesToShow, length]
  );
  return (
    <SlideWrapper
      button={button}
      width={width}
      height={height}
      className={className}
    >
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}

export default Slick;
