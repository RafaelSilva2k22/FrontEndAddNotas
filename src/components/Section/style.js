import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 16px;
  margin: 32px 0;

  > h2 {
    width: 100%;

    padding: 16px 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.TEXT_COLOR_BLACK};
    margin-bottom: 16px;
    margin: 0 auto;
  }
`;
