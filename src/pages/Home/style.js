import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 99%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 76px 60px auto;
  grid-template-areas:
    "header header"
    "Sidebar filters"
    "Sidebar content";
  padding: 0 0 16px 0;
  border-radius: 5px;
  gap: 8px;
`;

export const Sidebar = styled.div`
  width: 100%;
  height: 100%;
  grid-area: Sidebar;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
export const Menu = styled.ul`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  overflow-y: auto;

  flex-direction: column;
  align-items: center;

  > li {
    width: 100%;
    height: 45px;
    list-style: none;

    border-radius: 2.5px;
    margin-bottom: 10px;
  } 
  
`;

export const Logo = styled.div`
  width: 100%;

  > a {
    padding-left: 32px;
    font-size: 18px;
    line-height: 60px;

    font-weight: 400;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 0 64px;
  grid-area: content;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-items: center;

  gap: 8px;
  overflow-y: auto;
  border: none;
`;

export const Filters = styled.div`
  width: 90%;
  height: 60px;
  grid-area: filters;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  > h2 {
    width: 50%;
    font-weight: 600;
  }
  > svg {
    margin-right: 20px;

  }
`;

export const SearchContainer = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  
   & svg {
    font-size: 20px;
   }

`;
export const NewNote = styled(Link)`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR} ;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: auto;
  height: 35px;
  transition: all ease-in-out 0.5s;
  margin-right: -2rem;



  &:hover,
  &:focus {
    box-shadow: 0 0 1em #00000013;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  margin-top: 0.1em;

  &:hover {
    cursor: pointer;
  }

`;

export const SearchIcon = styled.svg`
  height:16px;
  width: auto;
  fill: #2c2c2c;
`;
