import styled from "@emotion/styled";
import React from "react";
import Navs from "../Navs";
import Search from "../Search";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding: 20px 0 20px 0;
  align-items: center;

  .title-navs {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
  }

  .info-navs {
    margin-left: auto;
  }

  .logo {
    padding-right: 16px;
    white-space: nowrap;
    font-size: 1.5rem;
    line-height: 1.625rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.device.tablet}) {
    .title-navs {
      display: none;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.size.maxWidth}) {
    margin: 0 32px 0 32px;
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    .info-navs {
      display: none;
    }

    padding: 18px 24px 8px 24px;
    margin: 0;
  }
`;

type contentType = {
  href: string;
  content: string;
};

interface HeaderProps {
  titles: contentType[];
  infos: contentType[];
}

const Header: React.VFC<HeaderProps> = ({ titles, infos }) => {
  return (
    <Wrapper>
      <Container>
        <span className="logo">CLASS101</span>
        <Navs navs={titles} className="title-navs" />
        <Search />
        <Navs navs={infos} className="info-navs" />
      </Container>
    </Wrapper>
  );
};

export default Header;
