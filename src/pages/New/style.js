import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  display: grid;
  grid-template-rows: 76px auto;
  grid-template-columns: 250px auto;

  grid-template-areas:
    "header header"
    "content content";

    gap: 16px;
`;

export const Content = styled.main`
  grid-area: content;
  width: 900px;
  height: 100%;
  
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
`;

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

export const Title = styled.header`
  width: 100%;
  margin: 0 auto;
  
  > h1 {
    line-height: 64px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 400px;

  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
  border-radius: 5px;
  padding: 8px;

  font-size: 14px;
  resize: none;
  outline: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
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