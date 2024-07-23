import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  position:relative;

  > .container-post {
    max-width: 768px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;


    p {
      text-align: justify;
      font-size: 16px;
      line-height: 180%;
      
    }
    blockquote {
      padding: 8px;
      margin: 24px 0 24px 24px;
      border-left: 4px solid #ccc; /* Ajuste a cor e a espessura conforme necessário */

    }
    h1 {
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: 800;
      line-height: 250%;
    }
    h2 {
      margin: 24px 0;
      font-size: 18px;
      font-weight: 700;
      line-height: 250%;
    }
    h3 {
      margin: 24px 0;
      line-height: 250%;
      font-size: 16px;
      font-weight: bold;
    }

    li, ol {
      margin: 16px 0;
      width: 100%;
      font-size: 16px;
      line-height: 180%;
    }
    span {
    padding: 8px;
    font-size: 16px;
    line-height: 200%;
    }

    img {
        width: 100%;

        object-fit: cover;
      }
      a {
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR}
      }
      table {
        margin: 24px 0;
      } 
      tbody {
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      }
      th , td {
        text-align: center;
      }

  .trash-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: ${({ theme }) => theme.COLORS.ERROR};

    svg {
      width: 60%;
      height: 60%;
      font-size: 50px;
      color  :white;
      position: absolute;
      top: 50%;
      right: 20%;
      transform: translateY(-50%);
    }
  }
`;
