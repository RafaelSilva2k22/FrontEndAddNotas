import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};

  > header {
    width: 100%;
    height: 76px;
    padding: 0 32px;
    margin: 4px auto;
    display: flex;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_BLACK};
    position: relative;

    > a {
      color: ${({ theme }) => theme.COLORS.TEXT_COLOR_WHITE};
      font-size: 24px;
      line-height: 76px;
    }
  }
`;

export const Form = styled.form`
  width: 300px;
  margin: 100px auto;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};
    object-fit: cover;
  }

  > label {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_WHITE};

    position: absolute;
    bottom: 4px;
    right: -5px;

    > input {
      display: none;
    }
    > svg {
      font-size: 16px;
    }
  }
`;
