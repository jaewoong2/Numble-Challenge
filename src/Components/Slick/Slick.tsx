import { useMemo } from "react";
import styled from "@emotion/styled";
import React from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideWrapper = styled.section<{
  width: string;
  height: string;
}>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height.slice(0, height.length - 2) + 32 + "px"};

  .slick-list {
    overflow: unset;
    overflow-x: hidden;
    overflow-y: visible;
    transform: translateY(32px);
    border-radius: 8px;
  }

  * {
    &:focus {
      outline: none;
      border: none;
    }
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

  getIndex: (index: number) => void;
  width: string;
  height: string;
}

function Slick({
  children,
  className,
  autoplay = true,
  speed = 300,
  loop = true,
  getIndex,
  width,
  height,
}: sliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      speed: speed,
      arrows: false,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === "boolean" ? 3000 : autoplay,
      afterChange: (index) => {
        getIndex(index);
      },
    }),
    [autoplay, loop, speed, getIndex]
  );
  return (
    <SlideWrapper width={width} height={height} className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}

export default Slick;
