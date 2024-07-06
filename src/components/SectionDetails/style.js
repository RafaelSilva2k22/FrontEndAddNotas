import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  > .container-post {
    max-width: 768px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    > p {
      text-align: justify;
    }
    > h1 {
      margin-bottom: 30px;
      margin-top: 30px;
    }

    li {
      list-style: none;
    }

    > figure {
      max-width: 768px;
      margin: 32px 0;
      > img {
        width: 100%;

        object-fit: cover;
      }
      > figcaption {
        color: ${({ theme }) => theme.COLORS.GRAY_50};
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL};
        > a {
          color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
          font-size: ${({ theme }) => theme.FONT_SIZES.SMALL};
        }
      }
    }
  }
  .container-post :first-child {
    justify-content: end;
  }
`;
