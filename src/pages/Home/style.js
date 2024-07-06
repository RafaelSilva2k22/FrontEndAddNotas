import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 60px 60px auto;
  grid-template-areas:
    "Sidebar header"
    "Sidebar filters"
    "Sidebar content";
  padding: 0 0 16px 0;
  border-radius: 5px;
`;

export const Sidebar = styled.div`
  width: 245px;
  height: 100vh;
  grid-area: Sidebar;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-bottom: 20px;
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

export const SettingsButton = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 20px;

  > .settings {
    font-size: 16px;
    padding-left: 16px;
  }

  > svg {
    font-size: 20px;
    margin-left: 16px;
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
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};

  > h2 {
    width: 50%;
    font-weight: 600;
  }
  > svg {
    margin-right: 16px;
    font-size: 20px;
  }
`;

export const SearchContainer = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_70};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 100%;
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

  &::placeholder {
    font-weight: 200;
    color: ${({ theme }) => theme.COLORS.GRAY_70};
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
  height: 16px;
  width: auto;
  fill: #2c2c2c;
`;
