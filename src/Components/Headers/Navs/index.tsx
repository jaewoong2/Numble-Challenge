import { Colors } from "@class101/ui";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

const Wrapper = styled.div<{ hover: boolean }>`
  display: flex;
  align-items: center;

  a {
    margin-right: 16px;
    white-space: nowrap;
    line-height: 1.625rem;
    color: #1a1a1a;
    position: relative;

    h4 {
      margin: 0;
      padding: 0;
      border: 0;
    }

    ${({ hover }) =>
      hover
        ? css`
            &:hover {
              h4 {
                font-weight: bold;
              }

              &::after {
                content: "";
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: black;
              }
            }
          `
        : ``};
  }
`;

type navType = {
  content: string;
  href: string;
  current?: boolean;
};

interface NavsProps extends HTMLAttributes<HTMLDivElement> {
  navs: navType[];
  hover?: boolean;
  current?: string;
}

export const NavItem = ({ href, content, current }: navType) => {
  return (
    <a
      style={{ color: current ? Colors.orange400 : "black" }}
      key={content}
      href={href}
    >
      <h4>{content}</h4>
    </a>
  );
};

const Navs: React.VFC<NavsProps> = ({
  current,
  navs,
  hover = false,
  ...props
}) => {
  return (
    <Wrapper hover={hover} {...props}>
      {navs?.map(({ content, href }) => (
        <NavItem
          current={content === current}
          content={content}
          href={href}
          key={content}
        />
      ))}
    </Wrapper>
  );
};

export default Navs;
