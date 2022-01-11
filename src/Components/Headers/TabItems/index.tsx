import { Tabs } from "@class101/ui";
import { TabItem } from "@class101/ui/dist/components/Tabs/TabItem";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Navs, { NavItem } from "../Navs";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  .main-navs {
    font-weight: bold;
  }

  .main-navs,
  .sub-navs {
    a {
      margin-right: 28px;
    }
  }

  .hr {
    margin: 0;
    margin-right: 28px;
    background-color: ${({ theme }) => theme.color.gray};
    min-height: 30px;
    width: 1px;
    background-color: rgb(248, 248, 248);
    margin-right: 30px;
    padding-bottom: 12px;
  }

  .tab {
    box-shadow: none;
    .category {
      &::before {
        display: none;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.device.tablet}) {
  }

  @media screen and (max-width: ${({ theme }) => theme.size.maxWidth}) {
    margin: 0 32px 0 32px;
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    a {
      margin-right: 0px;
    }
    .sub-navs {
      display: none;
    }

    padding: 18px 24px 8px 24px;
    margin: 0;
  }
`;

type navType = {
  content: string;
  href: string;
};

interface TabsProps {
  mainNavs: navType[];
  subNavs: navType[];
}

const TabItems: React.VFC<TabsProps> = ({ mainNavs, subNavs }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper>
      <div
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <Tabs
          className="tab"
          value={isHover ? "category" : ""}
          onChange={() => {}}
        >
          <TabItem
            className="category"
            title="전체 카테고리"
            value="category"
            panel={<div>카테고리</div>}
            active={false}
          />
        </Tabs>
      </div>
      <Navs className="main-navs" hover={true} navs={mainNavs} />
      <div className="hr sub-navs" />
      <Navs className="sub-navs" hover={true} navs={subNavs} />
    </Wrapper>
  );
};

export default TabItems;
