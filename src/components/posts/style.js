import styled from "styled-components";

export const Container = styled.section`
  width: 200px;
  height: 250px;

  margin: 16px 0;
  background: #8360c3;
  background: -webkit-linear-gradient(
    to bottom,
    ${({ theme }) => theme.COLORS.PRIMARY_COLOR},
    ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_BLACK}
  );
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.COLORS.PRIMARY_COLOR},
    ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_BLACK}
  );

  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  > h1 {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
  }

  > footer {
    width: 100%;

    display: flex;

    margin-top: 16px;

    > ul {
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
      gap: 5px;
    }

    > ul li {
      list-style: none;
    }
  }
`;
