import styled from "styled-components";

export const Container = styled.span`
  margin-right: 4px;
  list-style: none;
  background-color: ${({ theme }) => theme.COLORS.GRAY_70};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
  border-radius: 5px;
`;
