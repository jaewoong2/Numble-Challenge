import { Input, SearchIcon } from "@class101/ui";
import styled from "@emotion/styled";
import React from "react";

const ControlForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  button {
    user-select: none;
    position: absolute;
    right: 16px;
  }

  .input {
    width: 100%;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.color.gray};
    cursor: pointer;

    &:hover {
      border: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.device.desktop}) {
    width: 420px;
    margin: 0px;

    .input {
      border-radius: 24px;
    }
  }
`;

interface SearchProps {
  placeholder?: string;
  icon?: boolean;
  className?: string;
}

const Search: React.VFC<SearchProps> = ({
  placeholder = "찾으시는 취미가 있으신가요?",
  icon = true,
  className,
}) => {
  return (
    <ControlForm className={className} onSubmit={(e) => e.preventDefault}>
      <Input
        className="input"
        autocomplete={false}
        maxlength="100"
        fill={true}
        placeholder={placeholder}
      />
      {icon && (
        <button onClick={() => {}}>
          <SearchIcon size={18} />
        </button>
      )}
    </ControlForm>
  );
};

export default Search;
