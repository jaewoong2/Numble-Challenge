import {
  Colors,
  MenuIcon,
  PlayIcon,
  PlayOutlineIcon,
  StoreIcon,
  StoreOutlineIcon,
} from "@class101/ui";
import { PersonOutline } from "@class101/ui/dist/Icon/export-legacy.generated";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  MDRECOMMEND,
  TODAYSALE,
  OPENCLASS,
  EVENT,
  POPULARCATEGORIES,
} from "src/Constant";
import Bottom from "../Bottom";
import BottomNav from "../BottomNav";
import Banner from "./Banner";
import CardSection from "./CardSection";
import Item from "./Slick/Item";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin-top: 64px;
  position: relative;

  .icon-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    .icon-description {
      margin-top: 8px;
      font-size: 9px;
      font-weight: 600;
      color: rgb(26, 26, 26);
      line-height: 12px;
      letter-spacing: normal;
    }
  }
`;

interface MainProps {}

const Main: React.VFC<MainProps> = ({}) => {
  const [clientWidth, setClientWidth] = useState(
    document.querySelector("main")?.clientWidth
  );

  useEffect(() => {
    setClientWidth(document.querySelector("main")?.clientWidth);

    const resize = () => {
      setClientWidth(document.querySelector("main")?.clientWidth);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Wrapper>
      <Banner bgColor="rgb(25, 65, 235)" subTitle="3만원 쿠폰도 무조건 발급 >">
        내 취향 분석 받을 절호의 기회!
      </Banner>
      <CardSection
        subtitle=""
        title="오늘의 특가! TIME DEAL"
        more="전체 클래스 보기"
      >
        <Item
          badgeColor="rgb(88, 32, 207)"
          timedeal={true}
          slidesToShow={4}
          items={TODAYSALE.time_deal}
          width={"100%"}
          height={"auto"}
        />
      </CardSection>
      <CardSection subtitle="" title="MD 추천 클래스" more="">
        <Item
          badgeColor={Colors.red600}
          timedeal={false}
          slidesToShow={4}
          items={MDRECOMMEND.md_recommend}
          width={"100%"}
          height={"auto"}
        />
      </CardSection>
      <CardSection
        subtitle=""
        title="진행중인 인기 이벤트"
        more="전체 이벤트 보기"
      >
        <Item
          topHeart={false}
          badgeColor={Colors.red600}
          timedeal={false}
          slidesToShow={4}
          items={EVENT.popular_event}
          width={"100%"}
          height={"auto"}
        />
      </CardSection>
      <CardSection
        title="오픈 예정 클래스"
        subtitle="오픈 예정인 클래스를 응원하면 얼리버드 오픈 시 알려드려요!"
        more="전체 클래스 보기"
      >
        <Item
          badgeColor={Colors.red600}
          timedeal={false}
          slidesToShow={4}
          items={OPENCLASS.open_soon}
          width={"100%"}
          height={"auto"}
        />
      </CardSection>
      <Bottom categories={POPULARCATEGORIES} />
      <BottomNav width={clientWidth + "px"}>
        <div className="icon-container">
          <PlayOutlineIcon fillColor={Colors.orange400} size={22} />
          <div style={{ color: Colors.orange400 }} className="icon-description">
            클래스
          </div>
        </div>
        <div className="icon-container">
          <StoreOutlineIcon size={22} />
          <div className="icon-description">스토어</div>
        </div>
        <div className="icon-container">
          <MenuIcon size={22} />
          <div className="icon-description">카테고리</div>
        </div>
        <div className="icon-container">
          <PersonOutline size={22} />
          <div className="icon-description">마이페이지</div>
        </div>
      </BottomNav>
    </Wrapper>
  );
};

export default Main;
