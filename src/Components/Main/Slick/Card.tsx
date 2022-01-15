import {
  Badge,
  Button,
  ClapOutlineIcon,
  Colors,
  HeartIcon,
  HeartOutlineIcon,
  LikeIcon,
  TimerIcon,
} from "@class101/ui";
import styled from "@emotion/styled";
import React from "react";
import { getDay, getDDay } from "src/Utils";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;

  .image-container {
    width: 95%;
    margin-bottom: 8px;
    border-radius: 8px;
    overflow: hidden;

    .card-image {
      width: 100%;
      max-width: 100%;
      height: auto;
      height: auto;
      overflow: hidden;

      &:hover {
        transform: scale(1.1, 1.1);
        transition: transform 0.8s;
      }
      transition: transform 0.8s;
    }
  }

  .heart-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    padding: 0;
    background-color: transparent;
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 25px;
    border-radius: 50%;
    width: 32px;
    height: 32px;

    &:hover {
      background-color: rgba(248, 248, 248, 0.2);
      transition: background 0.2s;
    }
    transition: background 0.2s;
  }
`;

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;

  .timedeal {
    border-radius: 4px;
    height: 20px;
    background-color: black;
    display: flex;
    align-items: center;
    width: 95%;
    padding: 0 6px 0 7px;
    justify-content: center;

    .description {
      margin-left: 3px;
      font-size: 9px;
      width: 90%;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    margin-bottom: 8px;
  }

  .creator {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 0.6875rem;
    line-height: 0.875rem;
    font-weight: 700;
    color: #000000;
  }

  .title {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;
    color: rgb(26, 26, 26);
    height: 40px;
    margin: 4px 0px 8px;
  }

  .icons {
    display: flex;
    width: 100%;

    .icon-description {
      display: flex;
      align-items: center;
      margin-left: 3px;
      color: ${({ color }) => (color ? color : "black")};
    }

    .icon {
      display: flex;
      align-items: center;
      font-size: 11px;
      font-weight: normal;
      line-height: 16px;
      letter-spacing: normal;
      margin: 0px 8px 0px 0px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      color: rgb(162, 162, 162);
    }
  }

  .line {
    flex: none;
    background-color: #fafafa;
    width: 100%;
    height: 1px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .price-container {
    width: 100%;
    .sale-persentage {
      margin: 0 4px 0 0;
      padding: 0;
      border: 0;
      font-size: 0.8125rem;
      line-height: 1.125rem;
      font-weight: 700;
      color: #fd3049;
    }
    .price {
      margin: 0 4px 0 0;
      padding: 0;
      border: 0;
      font-size: 0.8125rem;
      line-height: 1.125rem;
      font-weight: 700;
      color: #1a1a1a;
    }

    .installment {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 0.6875rem;
      line-height: 0.875rem;
      font-weight: 400;
      color: #a2a2a2;
    }
  }

  .periods {
    margin: 0 4px 0 0;
    padding: 0;
    font-weight: 700;
    border: 0;
    font-size: 0.8125rem;
    line-height: 1.125rem;
    color: #1a1a1a;
    display: flex;

    h4 {
      width: fit-content;
      margin-right: 4px;
    }
  }
`;

const CheerContainer = styled.div`
  width: 100%;
  .finish-date {
    font-size: 11px;
    font-weight: normal;
    color: rgb(162, 162, 162);
    line-height: 16px;
    letter-spacing: normal;
    margin: 0px;
  }

  .cheer-up {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 77, 0, 0.1);
    color: rgb(255, 77, 0);
    margin-top: 8px;
    border-radius: 3px;

    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.2px;
    height: 40px;

    &:hover {
      background-color: rgba(255, 77, 0, 0.2);
      transition: background-color 0.1s ease 0s;
    }

    transition: background-color 0.1s ease 0s;
    span {
      padding: 0 16px 0 16px;
    }
  }
`;

interface CardProps {
  timedeal: boolean;
  id?: number;
  title?: string;
  creator?: string;
  img?: string;
  like?: number;
  thumsUp?: number; // 없을 시 null
  price?: {
    originalPrice: number;
    salePrice: number;
    installment: number | undefined; // 할부 개월 수 // 0일 시 표시하지 않음
  };
  coupon?: number; // 없을 시 null // number만원 쿠폰\
  badgeColor: string;
  cheer?: {
    goal: number;
    score: number;
    finishDate: string; // timestamp
  };
  LastComponent?: React.ReactNode;
  topHeart?: boolean;
  period?: {
    startDate: string; // yyyy-mm-dd
    finishDate: string; // yyyy-mm-dd
  };
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  coupon,
  creator,
  like,
  thumsUp,
  price,
  timedeal,
  badgeColor,
  cheer,
  LastComponent,
  topHeart = true,
  period,
}) => {
  if (LastComponent) {
    return <>{LastComponent}</>;
  }

  return (
    <Wrapper>
      <div className="image-container">
        <img className="card-image" src={img} alt={title} />
      </div>
      <Container>
        {timedeal && (
          <div className="timedeal">
            <TimerIcon size={15} fillColor="white" />
            <div className="description">
              <div>타임딜 종료까지</div>
              <div>2일</div>
            </div>
          </div>
        )}
        <div className="creator">{creator}</div>
        <div className="title">{title}</div>
        <div className="icons">
          {like ? (
            <div className="icon heart">
              <HeartIcon size={13} fillColor="rgb(215, 215, 215)" />
              <div className="icon-description">{like}</div>
            </div>
          ) : (
            ""
          )}
          {thumsUp ? (
            <div className="icon like">
              <>
                <LikeIcon size={13} fillColor="rgb(215, 215, 215)" />
                <div className="icon-description">{thumsUp}</div>
              </>
            </div>
          ) : (
            ""
          )}
          {cheer ? (
            <div className="icon clap">
              <>
                <ClapOutlineIcon size={13} fillColor={Colors.red600} />
                <div
                  className="icon-description"
                  style={{ color: Colors.red600 }}
                >
                  {Math.ceil((cheer.score / cheer.goal) * 100)}% 달성
                </div>
              </>
            </div>
          ) : (
            ""
          )}
        </div>
        {(thumsUp || cheer || like) && <div className="line" />}
        <div>
          {price && (
            <div className="price-container">
              <span className="sale-persentage">
                {Math.floor(
                  ((price.originalPrice - price.salePrice) /
                    price.originalPrice) *
                    100
                )}
                %
              </span>
              <span className="price">
                {price.installment
                  ? "월" + Math.floor(price.salePrice / price.installment)
                  : price.salePrice}
                원
              </span>
              <span className="installment">
                {price.installment && "(" + price.installment + "개월)"}
              </span>
            </div>
          )}
          {period && period.finishDate !== "0" && period.startDate !== "0" ? (
            <div className="periods">
              <h4 style={{ color: Colors.red400 }}>
                D-{getDDay(period.finishDate)}
              </h4>
              <h4>
                {period?.startDate +
                  "(" +
                  getDay(period?.startDate) +
                  ")" +
                  "~" +
                  period?.finishDate +
                  "(" +
                  getDay(period?.finishDate) +
                  ")"}
              </h4>
            </div>
          ) : (
            ""
          )}
        </div>
        {cheer ? (
          <CheerContainer>
            <div className="finish-date">{cheer.finishDate}까지</div>
            <div className="cheer-up">
              <span>응원하기</span>
            </div>
          </CheerContainer>
        ) : (
          ""
        )}
      </Container>
      {coupon ? (
        <Badge
          size={"md"}
          backgroundColor={badgeColor}
          color={Colors.white}
          className="badge"
        >
          {coupon}만원 쿠폰
        </Badge>
      ) : (
        ""
      )}
      {topHeart && (
        <Button className="heart-btn">
          <HeartOutlineIcon fillColor="rgb(215, 215, 215)" />
        </Button>
      )}
    </Wrapper>
  );
};

export default Card;
