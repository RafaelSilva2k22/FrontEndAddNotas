import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};

  margin: 8px auto;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};

  > input {
    height: 40px;
    width: 100%;
    padding: 12px;

    background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
    border: none;

    outline: none;
  }
  > svg {
    margin-left: 12px;
  }
`;
