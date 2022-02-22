# 클래스101 클론 코딩
 클래스101 의 메인페이지를 클론 코딩하는 챌린지를 하였다. 처음 봤을 때는, 서버와의 통신 및 다른 요구조건 없이 퍼블리싱과 반응형 디자인 위주로 하면 되기 때문에 시간이 많이 걸리지 않을 것이라고 예상 하였다. 하지 세분화된 반응형 디자인, 디자인 시스템 기반으로 코딩, 다양한 프론트엔드 로직등이 생각보다 어려움을 주었고 시간이 오래 걸리게 되었다.
![https://class101.net](https://images.velog.io/images/jwisgenius/post/645f9c91-ca5b-46d6-8a9f-64f45d2e1f52/image.png)
`클론코딩을 위한 클래스101 메인페이지`

![https://jaewoong2.github.io/Numble-Challenge/](https://images.velog.io/images/jwisgenius/post/4da3fc6b-8407-4c7b-b41f-b6a86649bbc3/image.png)
`클론코딩의 결과 메인페이지`

- 배너의 배경화면은 주어진 데이터에 없으면 보라색으로 설정하였다.

## 주요 코드에 대한 설명

많은 코드 중 주요하다고 생각 한 것은 `Carousel` 의 `timer bar animation` 설정이다. 
![](https://images.velog.io/images/jwisgenius/post/043b3a63-9adb-4722-9970-cdbdb10ebc4c/chrome-capture.gif)
```ts

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
```

`emotion` 의 `styled` 컴포넌트는 속성이 바뀔 때마다 새롭게 렌더링 되는 특징을 가지고 있다.
이러한 특징을 이용하기 위해서 `Carousel image`의 현재 `index가` 바뀔 때마다, `reset` `state`를 토글 시켜서 컴포넌트의 속성을 변경 시키는 코드를 반영하였다. 

또한, `index가` 바뀔때 바로 `reset state`를 토글시키면 컴포넌트는 토글 된 `reset state`를 
인식하지 못한다. 따라서 `Settimeout` 을 사용해서 `index`가 바뀌고 나서 조금 늦게 토글 시키도록 하였다.


## 주요 로직과 그 이유

Input을 클릭 하면, Input에 대한 ToolTip이 나오는 것을 그나마 있는 로직인 것 같다. 
![](https://images.velog.io/images/jwisgenius/post/6d51cdba-e97b-46c5-b20f-8a888409ee62/chrome-capture%20(1).gif)

이 로직은, `<Headers>` 컴포넌트에서 `isClicked` 상태를 내려줘서 `<Header>` 컴포넌트에서 클릭 및 취소를 모두 관리하는 로직을 갖는다.

```ts
const Headers: React.VFC<HeadersProps> = ({ bannerContent, bannerSrc }) => {
  const [searchClick, setSearchClick] = useState(false);

  const onSearhToggle = useCallback((boolean: boolean) => {
    setSearchClick(boolean);
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
        isClicked={searchClick}
        onSearchClick={(bool: boolean) => onSearhToggle(bool)}
        current={params}
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
          ...
```


## 코드 내에서 고려한 특정 유저 행동과 그에 대한 대처

유저중에서 화면크기를 수시로 늘렸다 줄였다 하는 유저가 있을 것으로 예상 하였다. 보통 데스크탑을 사용하다가 전체 화면으로 사용하다가 화면을 반만 사용 할 수도 있기 때문이다.

물론 메인페이지에서 보여줄수 있는 반응형 디자인은 어려움 없이 하였다. ~~`(코드는 더러울지라도..)`~~ 
하지만, 모바일 크기의 화면에서 `BottomNavigation`을 반응형 디자인으로 설계 할 때, 너비가 화면을 넘어가서 스크롤 위를 덮는 것을 확인 하였다. 

이러한 대처로서, window 에 resize 이벤트를 추가하여 resize가 될 때마다 메인 화면의 clientWidth 값을 `BottomNavigation` 의 width로서 계속해서 수정하는 방법을 사용 하였다.

이렇게 되면 Dom에 직접 접근해야해서 `React`의 철학? 에는 맞지 않는 것 같아서 완벽하게 대처하지 못하여 아쉬움이 남았다.

![](https://images.velog.io/images/jwisgenius/post/02cd3b6f-7d45-4141-927d-951250622fbb/chrome-capture%20(2).gif)

## 활용한 라이브러리와 그 이유

`React Slick` : Class 101의 Carousel이 정상작동하지 않는다 하여서 가장 쉽고 빠르게 사용 할 수 있는 React Slick 라이브러리를 사용 하였다. 

`emotion`: 디자인 시스템 설계에 맞춰서 코드를 짤 수 있고, 용량의 크기가 크지 않은 라이브러리이기 때문에 사용하였다.

## 프로젝트를 진행할 때 어려웠던 점/고민했던 부분과 해결방법

프로젝트를 진행하면서 디자인 시스템 설계에 맞게 `Theme` 설정과, `Type`설정을 하려고 하였다.

하지만, 시간이 지남에 따라서 일정이 급해졌고, 초반에 코드를 짤 때 제외하고 `Theme`, `Type` 에 대해서 설정을 하며 코드를 짜지 못한것이 너무 아쉬웠다.  

나는 이 점이 프로젝트를 진행 할 때 매우 어려웠던 점으로 꼽고 싶다. 왜냐하면, 내가 이러한 디자인 시스템 설계에 따라서 프로그래밍을 잘했더라면 시간이 급하더라도 머릿속으로 맞춰가면서 코드를 진행했을 것 같기 때문이다.

이러한 해결방법은 아직 진행하지 못하였지만, 챌린지 결과물 제출 이후에도 계속해서 리팩토링 하면서 디자인 시스템 설계에 맞게 코드를 짜고, 남의 코드를 보면서 어떻게 했는지 계속해서 확인을 하는 것으로 생각된다.

-----

클론코딩 페이지: https://jaewoong2.github.io/Numble-Challenge/
Github: https://github.com/jaewoong2/Numble-Challenge/
