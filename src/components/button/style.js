import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  border: 0;
  padding: 8px 16px;
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
  text-align: center;
  border-radius: 5px;
`;
