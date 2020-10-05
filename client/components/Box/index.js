/*
 * author: Eze Bernardine May
 */

import styled from "styled-components";

export const Flex = styled('div')`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  min-width: ${({ min, width }) => min && width};
  min-height: ${({ min, height }) => min && height};
  max-width: ${({ max, width }) => max && width};
  max-height: ${({ max, height }) => max && height};
  background: ${({ bgColor }) => bgColor && bgColor};
  padding: ${({ padding }) => padding || null};
`;

export const Grid = styled('div')`
  display: grid;
  grid-template-columns: ${(props) => props.gridCol || "1fr"};
  grid-template-rows: ${(props) => props.gridRow || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  & > * {
    min-width: 0;
  }
`;
