import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Contents = styled.div<{ $margin: boolean; $marginWidth: number }>`
  background-color: #ddd;
  padding: 40px 20px;
  margin-left: ${({ $margin, $marginWidth }) => ($margin ? `${$marginWidth}px` : "100px")};
  flex: 1;

  h1 {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 150px;
  }
`;
