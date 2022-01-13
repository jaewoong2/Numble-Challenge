import React from "react";
import Headers from "./Components/Headers";
import TopCarousel from "./Components/TopCarousel";
import { TOPEVENTCAROUSEL } from "./Constant";

const App = () => {
  return (
    <>
      <Headers
        bannerSrc="https://class101.net/events/6182c7f6eea106001462755e"
        bannerContent="지금 가입하고 원하는 클래스 1개 무료 체험하기 >"
      />
      <TopCarousel datas={TOPEVENTCAROUSEL.top_event} />
    </>
  );
};

export default App;
