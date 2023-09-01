import styled from "styled-components";

export const ImageStyled = styled.div`
  position: relative;
  display: inline-block;
  width: 280px;
  height: 200px;
  
  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
  
  & > img {
    border-radius: 6px;
    display: block;
    width: 100%;
    height: auto;
  }
  
  @media screen and (max-width: ${({theme}) => theme.mobileSmall}) {
    & {
      width: 100%;
      height: auto;
    }
  }
`;
export const Cover = styled.div`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: .2s linear;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  justify-content: end;
  text-align: center;
  background-color: rgba(39, 40, 39, 0.5);
  
  & > p {
    margin: 0 0 15px 0;
    color: #fff;
  }

  & > p:first-child {
    font-weight: 800;
    overflow-y: scroll;
    font-size: 1.20rem;
  }
  
  & > p:nth-child(2) {
    position: relative;
    font-style: italic;
    font-size: 1rem;
    font-weight: 500;
  }
  
  & > p:nth-child(2):before {
    content: "";
    position: absolute;
    border: 1px solid #fff;
    width: 65px;
    text-align: center;
    left: 0;
    right: 0;
    top: -35%;
    margin: 0 auto;
  }
  
  & > button {
    padding: 12px 20px;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    margin: 5px auto 15px auto;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 999px;
  }
  
  & > button:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: #000;
    transition: .2s linear;
    cursor: pointer;
  }
  //remove hover effect on touch devices
  @media (hover: none) {
    & > button:hover {
      background-color: transparent;
      color: #fff;
    }
  }
  
  @media screen and (max-width: ${({theme}) => theme.mobileSmall}) {
    & > p:first-child {
      font-size: 1rem;
    }

    & > p:nth-child(2) {
      font-size: 0.8rem;
    }

    & > p:nth-child(2):before {
      width: 65px;
      top: -35%;
    }

    & > button {
      padding: 6px 10px;
      margin: 2px auto 7px auto;
      font-size: 0.8rem;
    }

    & > p {
      margin: 0 0 10px 0;
    }
    
    & {
      justify-content: center;
    }
  }
`;