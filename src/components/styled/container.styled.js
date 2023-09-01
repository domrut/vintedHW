import styled from "styled-components";

export const Container = styled.main`
  max-width: 1440px;
  padding: 0 5%;
  margin: 0 auto;
  position: relative;
  
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    padding: 0 1px;
  }
`;