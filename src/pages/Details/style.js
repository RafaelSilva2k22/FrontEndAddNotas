import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 76px auto;
  grid-template-areas:
    'header'
    "content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  padding-bottom: 16px;
  gap: 24px;

  
  > header {
    grid-area: "header";
    width: 99%;
    height: 76px;
    padding: 0 32px;
    margin: 4px auto;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_BLACK};
    position: relative;

    > a {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
      font-size: 24px;
      line-height: 76px;
    }
  }
  > main {
    grid-area: content;
    width: 100%;
    text-align: justify;
    overflow-y: scroll;
    margin-top: 40px;
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
