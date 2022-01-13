import { useEffect, useMemo, useRef } from "react";
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
    transform: translateY(72px);
    border-radius: 8px;
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

    .slick-list {
      width: 90%;
      height: 70%;
      transform: translateY(10px);
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
  setSlider: React.Dispatch<any>;
}

function Slick({
  children,
  className,
  autoplay = true,
  speed = 95,
  loop = true,
  getIndex,
  width,
  height,
  setSlider,
}: sliderProps) {
  const slider = useRef<any>();

  useEffect(() => {
    setSlider(slider);
  }, [slider, setSlider]);

  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      speed: speed,
      arrows: false,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === "boolean" ? 8000 : autoplay,
      afterChange: (index) => {
        getIndex(index);
      },
    }),
    [autoplay, loop, speed, getIndex]
  );
  return (
    <SlideWrapper width={width} height={height} className={className}>
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
    </SlideWrapper>
  );
}

export default Slick;
