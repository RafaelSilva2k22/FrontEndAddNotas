import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? theme.COLORS.TRASNSPARENT : theme.COLORS.TEXT_COLOR_WHITE};

  color: ${({ theme }) => theme.TEXT_COLOR_BLACK};

  border: ${({ theme, $isNew }) =>
    $isNew
      ? `1px dashed ${theme.COLORS.TEXT_COLOR_BLACK}`
      : `1px solid ${theme.COLORS.TEXT_COLOR_BLACK}`};

  margin: 32px 8px;
  border-radius: 5px;
  padding-right: 8px;

  > button {
    font-size: 20px;
    height: 40px;
    width: 30px;
    border: none;
    background: transparent;
    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.PRIMARY_COLOR : theme.COLORS.ERROR};
  }

  > input {
    height: 40px;
    width: 100%;
    padding: 12px;

    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.TEXT_COLOR_BLACK : theme.COLORS.GRAY_70};

    background-color: transparent;
    border: none;
    border-radius: 5px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_70};
    }
  }
`;
