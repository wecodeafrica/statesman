import styled from "styled-components";

export const HeaderStyles = styled.div`
  background: white;
  width: 100%;
      justify-content: space-between;
  border-bottom: 1px solid #ddd;
  .header-wrap {
    height: 62px;
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
        font-weight: 600;
        color: #ec2c22;
      }
      li + li {
        padding-left: 1rem;
      }
      @media (max-width: 850px) {
        display: none;
      }
    }
  }
`;
