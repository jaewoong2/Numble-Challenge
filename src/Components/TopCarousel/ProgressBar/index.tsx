import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  margin-left: 52px;
  bottom: -5px;
  width: 40%;
  height: 50px;
  align-items: center;
  color: white;

  .progress-bar {
    margin: 0 20px 0 20px;
    width: 70%;
    height: 1px;
    background-color: white;
    opacity: 0.5;
  }
`;

interface ProgressBarProps {}

const ProgressBar: React.VFC<ProgressBarProps> = ({}) => {
  return (
    <Wrapper>
      <>09 | 09</>
      <div className="progress-bar"></div>
      <div className="btn">
        <>{"<"}</>
        <>{">"}</>
      </div>
    </Wrapper>
  );
};

export default ProgressBar;
