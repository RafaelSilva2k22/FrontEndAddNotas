import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    height: 76px;
    padding: 0 32px 0 16px;
    margin: 4px auto;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_BLACK};
    position: relative;


    > a {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
}
`;

export const Profile = styled(Link)`
  width: auto;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};

  > img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_COLOR}
  }
`;
export const Logo = styled.div`
  width: 250px;
  display: flex;
  align-items: center;

  > img {
    height: 45%;
    
  }
`
