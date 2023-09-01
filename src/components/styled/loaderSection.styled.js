import styled from "styled-components";

export const LoaderSection = styled.section`
  position: fixed;
  height: 40px;
  width: 90%;
  z-index: 20;
  background-color: #fff;
  bottom: 0;
  
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    & {
      width: 100%;
    }
  }
`;