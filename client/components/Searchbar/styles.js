import styled from "styled-components";

export const SearchStyles = styled.div`
  border: ${({ searching }) =>
    searching ? "1px solid #FF9893" : "1px solid #FBCAC8"};
  border-radius: 8px;
  padding: 10px 7px;
  /* min-width: 250px; */
  & .searchicon-container,
  .dropdownicon-container {
    flex-basis: 6%;
    min-width: 20px;
    max-width: 20px;
  }
  & .dropdownicon-container {
    cursor: pointer;
  }
  input {
    flex-basis: 83%;
    padding: 0 15px;
    max-width: calc(100% - 40px);
  }
`;
