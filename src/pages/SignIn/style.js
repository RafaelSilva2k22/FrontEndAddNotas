import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 450px auto;
  grid-template-areas: "signIn image";

  > .signIn {
    grid-area: signIn;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
      line-height: 40px;
    }
    > span {
      color: ${({ theme }) => theme.COLORS.GRAY_50};
    }

    > h2 {
      font-size: 18px;
      line-height: 30px;
      margin: 40px 0 10px 0;
    }

    > a {
      font-size: 14px;
    }
  }

  > .image {
    grid-area: image;
    width: 100%;
    height: 100%;
    background: url("https://cdn.pixabay.com/photo/2017/04/19/13/17/computer-2242266_1280.jpg")
      no-repeat center center;
    background-size: cover;
  }
`;

export const Form = styled.form`
  width: 90%;
  padding: 0 64px;
  margin-bottom: 24px;
`;
