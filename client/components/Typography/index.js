import styled from "styled-components";

export const HeadingOne = styled.h1`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 2rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

export const HeadingTwo = styled.h2`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 1.7rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

export const HeadingThree = styled.h3`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 1.4rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const HeadingFour = styled.h4`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  font-size: 1.1rem;
  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;
export const HeadingFive = styled.h5`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "500"};
  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Paragraph = styled.p`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 0.95rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
export const Bold = styled.b`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 0.95rem;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export const Span = styled.span`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 0.8rem;
  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};
`;

export const Small = styled.small`
  color: ${({ color }) => (color ? color : " #7c7c7c")};
  font-size: 0.75rem;

  font-weight: ${({ bold, weight }) =>
    weight ? weight : bold ? "bold" : "350"};
`;
