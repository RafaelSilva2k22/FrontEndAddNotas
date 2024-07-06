import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 40px auto;
  grid-template-areas:
    "header"
    "content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  padding-bottom: 16px;

  > main {
    grid-area: content;
    width: 100%;
    text-align: justify;
    overflow-y: scroll;
    margin-top: 40px;
  }
`;
