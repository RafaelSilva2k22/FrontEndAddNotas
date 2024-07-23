import styled from "styled-components";

export const Container = styled.section`
  width: 300px;
  height: 150px;

  margin: 16px 0;
  background:
    ${({ theme }) => theme.COLORS.SECONDARY_COLOR};

  border-radius: 5px;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  > h1 {
    font-size: 18px;
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
      gap: 16px;
    }

    > ul li {
      font-size: 10px;
      list-style: none;
      > span {
        padding:4px 2px;
      }
    }
  }
`;
