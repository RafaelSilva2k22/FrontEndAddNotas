import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 90%;
  max-width: 1440px;
  height: 60px;

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
`;

export const Profile = styled(Link)`
  width: auto;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};

  > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
