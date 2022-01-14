import { Colors } from "@class101/ui";
import styled from "@emotion/styled";
import React from "react";
import { MDRECOMMEND, TODAYSALE } from "src/Constant";
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
`;

interface MainProps {}

const Main: React.VFC<MainProps> = ({}) => {
  return (
    <Wrapper>
      <Banner bgColor="rgb(25, 65, 235)" subTitle="3만원 쿠폰도 무조건 발급 >">
        내 취향 분석 받을 절호의 기회!
      </Banner>
      <CardSection title="오늘의 특가! TIME DEAL" subtitle="전체 클래스 보기">
        <Item
          badgeColor="rgb(88, 32, 207)"
          timedeal={true}
          slidesToShow={4}
          items={TODAYSALE.time_deal}
          width={"100%"}
          height={"auto"}
        />
      </CardSection>
      <CardSection title="MD 추천 클래스" subtitle="">
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
        title="진행중인 인기 이벤트"
        subtitle="전체 이벤트 보기"
      ></CardSection>
      <CardSection
        title="오픈 예정 클래스"
        subtitle="전체 클래스 보기"
      ></CardSection>
    </Wrapper>
  );
};

export default Main;
