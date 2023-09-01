import styled from "styled-components";
export const Header = styled.header`
    text-align: center;
    margin: 50px 0;
`;
export const Heading1 = styled.h1`
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    margin: 0; 
  
  @media screen and (max-width: ${({theme}) => theme.mobile}) {
    font-size: 1.5rem;
  }
`;