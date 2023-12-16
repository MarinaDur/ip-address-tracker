import { styled, css } from "styled-components";

const Paragraph = styled.p`
  text-align: center;
  font-weight: 700;
  overflow-wrap: break-word;

  ${(props) =>
    props.$type === "small" &&
    css`
      font-size: clamp(1rem, 2vw, 1.2rem);
      color: hsl(var(--color-dark-gray));
      letter-spacing: 1px;
      text-transform: uppercase;
    `}
  ${(props) =>
    props.$type === "big" &&
    css`
      font-size: clamp(1.7rem, 4vw, 2.2rem);
      overflow-wrap: break-word;
      hyphens: auto;
    `}

    @media (min-width: 768px) {
    text-align: left;
  }

  ${(props) =>
    props.$job === "error" &&
    css`
      text-align: center;

      @media (min-width: 768px) {
        text-align: center;
      }
    `}
`;

export default Paragraph;
