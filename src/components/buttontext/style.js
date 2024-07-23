import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

  height: 100%;
  text-align: start;
  border: 0;
  border-radius: 5px;
  padding: 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme, $isRed }) =>
    $isRed ? theme.COLORS.ERROR : theme.COLORS.TEXT_COLOR_BLACK};

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.GRAY_70 : theme.COLORS.TRANSPARENT};
`;
