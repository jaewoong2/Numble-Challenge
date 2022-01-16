import Search from "../Search";
import styled from "@emotion/styled";
import React from "react";
import { POPULAR_SEARCH_WORD, RECOMMEND_SEARCH_WORD } from "src/Constant";
import Lists from "./Lists";

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  background-color: transparent;

  .wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
  }

  .fix-full {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 8px 24px 8px 20px;
  display: flex;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  flex-direction: column;
  margin-top: 15px;

  .recommend {
    margin-top: 24px;
  }
  .popular {
    margin-bottom: 28px;
  }

  .logo {
    position: absolute;
    margin-left: 10px;
  }

  .search-wrapper {
    display: flex;
    align-items: center;

    .search-container {
      width: 676px;
      display: flex;
      margin: auto;
      align-items: center;

      .search {
        width: 93%;
      }
    }

    .cancle {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 0px 0px 0px 16px;
      background-color: transparent;
      cursor: pointer;
      font-weight: 500;
      color: rgb(162, 162, 162);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    height: 80vh;

    .logo {
      display: none;
    }

    .search-wrapper {
      .search-container {
        width: 100%;
        .search {
          width: 90%;
        }
      }
    }
  }
`;

const SearchContent = styled.div`
  width: 100%;
  width: 100%;
  visibility: visible;

  .item {
    background-color: rgb(248, 248, 248);
    border: 0px;
    border-radius: 25px;
    margin: 8px 4px 0px 0px;
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
      background-color: rgb(239, 239, 239);
    }
    transition: background 0.1s ease;

    span {
      font-size: 14px;
      font-weight: normal;
      color: rgb(26, 26, 26);
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 0px;
    }
  }

  .list-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin-top: 8px;

    .item,
    .index {
      background-color: transparent;
      color: rgb(26, 26, 26);
      font-size: 13px;
      line-height: 20px;
      padding: 8px 0px;
      border-radius: 0px 0px 3px 3px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      &:hover {
        font-weight: 800;
      }
    }

    .index {
      font-size: 14px;
      width: 18px;
      margin-right: 8px;
      font-weight: bold;
      letter-spacing: -1px;
      color: rgb(255, 86, 0);
    }

    .popular-search-word {
      flex-basis: 20%;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    .list-container {
      flex-wrap: nowrap;
      justify-content: space-around;

      .popular-search-word {
        font-size: 14px;
        width: 100%;
        padding: 8px 0 8px 0;
        height: 20px;
      }
    }
  }
`;

interface SearchToolTipProps {
  onCancelClick: () => void;
}

const SearchToolTip: React.VFC<SearchToolTipProps> = ({ onCancelClick }) => {
  return (
    <Wrapper>
      <div className="wrapper">
        <Container>
          <div className="search-wrapper">
            <span className="logo">CLASS101</span>
            <div className="search-container">
              <Search
                className="search"
                placeholder="찾으시는 취미가 있으신가요?"
              />
              <span onClick={onCancelClick} className="cancle">
                취소
              </span>
            </div>
          </div>
          <SearchContent className="search-content recommend">
            <Lists title="추천 검색어" line={true}>
              {RECOMMEND_SEARCH_WORD.map((item) => (
                <div className="item">
                  <span>{item}</span>
                </div>
              ))}
            </Lists>
          </SearchContent>
          <SearchContent className="search-content popular">
            <Lists title="인기 검색어" line={false}>
              <ul className="list-container">
                {POPULAR_SEARCH_WORD.map((item, i) => (
                  <li className="popular-search-word">
                    <span className="index">{i}</span>
                    <span className="item">{item}</span>
                  </li>
                ))}
              </ul>
            </Lists>
          </SearchContent>
        </Container>
      </div>
      <div onClick={onCancelClick} className="fix-full" />
    </Wrapper>
  );
};

export default SearchToolTip;
