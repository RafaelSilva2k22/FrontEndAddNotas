import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 250px auto;

  grid-template-areas:
    "logo header"
    "content content";
`;

export const LogoNewPost = styled.div`
  width: 100%;
  grid-area: logo;

  > a {
    padding-left: 16px;
    font-size: 22px;
    line-height: 60px;
    font-family: ${({ theme }) => theme.FONT_FAMILIES.SECONDARY};
  }
`;

export const Content = styled.main`
  grid-area: content;
  width: 760px;
  height: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
`;

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 0 64px;
`;

export const Title = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  > a {
    line-height: 64px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
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
