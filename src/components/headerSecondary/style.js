import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
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
`