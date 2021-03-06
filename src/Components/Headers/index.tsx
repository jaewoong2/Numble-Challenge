import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { theme } from "src/Style/theme";
import Banner from "./Banner";
import Header from "./Header";
import Navs from "./Navs";
import TabItems from "./TabItems";

const Wrapper = styled.section`
  @media screen and (max-width: ${({ theme }) => theme.device.mobile}) {
  }

  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

interface HeadersProps {
  bannerContent: string;
  bannerSrc: string;
}

const Headers: React.VFC<HeadersProps> = ({ bannerContent, bannerSrc }) => {
  const [bannerHide, setBannerHide] = useState(false);

  const onClickBannerCloseBtn = useCallback(() => {
    setBannerHide(true);
  }, []);

  return (
    <Wrapper>
      <Banner
        hide={bannerHide}
        onClickBanner={() => {}}
        fontColor="white"
        backgroundColor={theme.color.orange}
        onClickCloseButton={onClickBannerCloseBtn}
      >
        {bannerContent}
      </Banner>
      <Header
        titles={[
          { content: "클래스", href: "/" },
          { content: "스토어", href: "/store" },
        ]}
        infos={[
          { content: "크리에이터 지원", href: "/support" },
          { content: "기업교육", href: "/lecture" },
          { content: "로그인", href: "/login" },
        ]}
      />
      <TabItems
        mainNavs={[
          { content: "1월 가입혜택", href: "/event/signup" },
          { content: "이벤트", href: "/event" },
          { content: "바로수강", href: "/stduy" },
          { content: "신규 클래스", href: "/class/new" },
          { content: "오픈예정", href: "/class/ready" },
        ]}
        subNavs={[
          { content: "시그니처", href: "/signiture" },
          { content: "키즈", href: "/kids" },
          { content: "원포인트 클래스", href: "/onepoint" },
        ]}
      />
    </Wrapper>
  );
};

export default Headers;
