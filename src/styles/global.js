// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE}}

    html ::-webkit-scrollbar {
        width: 0;
    }


    body {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        
        color: ${({ theme }) => theme.COLORS.NAVY};
        font-family: ${({ theme }) => theme.FONT_FAMILIES.PRIMARY};
    }

    h1 {
        font-size: ${({ theme }) => theme.FONT_SIZES.H1};
        font-weight: 400;
        line-height: 125%;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};

    }

    h2 {
        font-size: ${({ theme }) => theme.FONT_SIZES.H2};
        font-weight: 400;
        line-height: 125%;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
        
    }

    h3 {
        font-size: ${({ theme }) => theme.FONT_SIZES.H3};
        font-weight: 600;
        line-height: 125%;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
    }

    h4 {
        font-size: ${({ theme }) => theme.FONT_SIZES.H4};
        font-weight: 600;
        line-height: 125%;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
    }

    p {
        font-size: ${({ theme }) => theme.FONT_SIZES.P1};
        font-weight: 400;
        line-height: 125%;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
    }

    li, input {
        font-size: ${({ theme }) => theme.FONT_SIZES.P2};
        font-weight: 400;
        line-height: 125%;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
    }
    span {
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL};
        font-weight: 300;
        line-height: 125%;
    }
    strong {
        font-size: ${({ theme }) => theme.FONT_SIZES.P1};
        font-weight: 500;
        line-height: 125%;
    }

    .caps , label {
        font-size: ${({ theme }) => theme.FONT_SIZES.CAPS};
        text-transform: uppercase;
        margin: 0 8px;
    }
    button { 
        font-size: ${({ theme }) => theme.FONT_SIZES.P1};
        font-weight: 400;
        line-height: 125%;
    }

    a {
        font-size: ${({ theme }) => theme.FONT_SIZES.P1};
        font-weight: 400;
        line-height: 125%;
        text-decoration: none;
        color: inherit;
    }

    a, button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a, button {
        filter: brightness(0.9);
    }

    input, textarea {
        font-family: ${({ theme }) => theme.FONT_FAMILIES.PRIMARY};
    }
`;
