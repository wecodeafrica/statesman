import styled from "styled-components";

export const HeaderStyles = styled.div`
  background: white;
  width: 100%;
  box-shadow: 0 2px 5px 1px #ecebeb;
  .header-wrap {
    height: 62px;
    margin: 0 6%;
    @media (max-width: 850px) {
      justify-content: space-around;
    }
  }
  .header-logo {
    color: #ec2c22;
    width: 20%;
    @media (max-width: 850px) {
      width: max-content;
    }
  }
  .searchbar-container {
    width: 30%;
    margin-right: 50px;
    @media (max-width: 850px) {
      margin: 0;
      width: 65%;
    }
  }
  .header-links-container {
    .header-menu {
      display: none;
      width: 25px;
      height: 23px;
      & > div {
        width: 100%;
        height: 3px;
        border-radius: 4px;
        background: #ec2c22;
      }
      @media (max-width: 850px) {
        display: grid;
      }
    }
    .header-links {
      display: inline-flex;
      & > li {
        list-style-type: none;
        margin: 0 10px;
        font-weight: 600;
        color: #ec2c22;
      }
      @media (max-width: 850px) {
        display: none;
      }
    }
  }
`;
