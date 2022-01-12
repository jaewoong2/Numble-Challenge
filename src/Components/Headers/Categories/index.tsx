import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";

const CategoriesWrapper = styled.div`
  top: 46px;
  position: absolute;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: -20px;
  width: 220px;
  border-top: 0px solid black;
  border: 1px solid rgb(239, 239, 239);

  .category-title {
    padding-top: 20px;
    color: ${({ theme }) => theme.color.grayDarker};
    font-size: 11px;
    padding-left: 20px;
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 0px 4px;
    line-height: unset;
  }

  @media screen and (max-width: ${({ theme }) => theme.device.tablet}) {
  }

  @media screen and (max-width: ${({ theme }) => theme.size.maxWidth}) {
  }

  @media screen and (max-width: ${({ theme }) => theme.device.desktop}) {
    display: none;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  left: 100%;
  top: -1px;

  border-top: 0px solid black;
  border: 1px solid rgb(239, 239, 239);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .category-label {
    padding: 8px 8px 8px 20px;
    font-size: 14px;
    line-height: 18px;
    margin: 0px;
    color: rgb(26, 26, 26);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: normal;
    cursor: pointer;
  }
  &:last-child {
    padding-bottom: 20px;
  }
`;

const List = styled.div``;

type categoriesType = {
  title: string;
  subjects: {
    href: string;
    title: string;
    contents: {
      title: string;
      href: string;
    }[];
  }[];
};

interface CategoriesProps {
  categories: categoriesType[];
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

const Categories: React.VFC<CategoriesProps> = ({
  categories,
  onMouseLeave,
  onMouseEnter,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [hoverValue, setHoverValue] = useState("");

  const onMouseToggle = useCallback((enter: boolean, value: string) => {
    if (enter) {
      setIsHover(true);
      setHoverValue(value);
    } else {
      setIsHover(false);
      setHoverValue("");
    }
  }, []);

  return (
    <CategoriesWrapper>
      <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {categories.map(({ title, subjects }) => (
          <Container key={title}>
            <h2 className="category-title">{title}</h2>
            {subjects.map(({ title: subjectTitle, contents }) => (
              <List key={subjectTitle}>
                <h3
                  onMouseLeave={() => onMouseToggle(false, subjectTitle)}
                  onMouseEnter={() => onMouseToggle(true, subjectTitle)}
                  className="category-label"
                >
                  {subjectTitle}
                </h3>
                {hoverValue === subjectTitle && isHover && (
                  <ContentsContainer
                    onMouseLeave={() => onMouseToggle(false, subjectTitle)}
                    onMouseEnter={() => onMouseToggle(true, subjectTitle)}
                  >
                    <h2 className="category-title">{subjectTitle}</h2>
                    {contents.map(({ title, href }) => (
                      <List key={title}>
                        <a href={href}>
                          <h3 className="category-label">{title}</h3>
                        </a>
                      </List>
                    ))}
                  </ContentsContainer>
                )}
              </List>
            ))}
          </Container>
        ))}
      </Wrapper>
    </CategoriesWrapper>
  );
};

export default Categories;
