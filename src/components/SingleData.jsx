import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";

const StyledSingleData = styled(Flex)`
  gap: 0.5rem;
  word-wrap: break-word;
  word-break: break-all;
  hyphens: auto;

  /* text-align: left; */
  /* overflow-wrap: break-word; */

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: 2rem 1fr;
    justify-items: start;
    padding-inline: 1rem;
    align-items: start;
    height: 100%;
    position: relative;
    /* margin-right: 10px; */
  }
`;

function SingleData({ name, data }) {
  return (
    <StyledSingleData>
      <Paragraph $type="small">{name}</Paragraph>
      <Paragraph $type="big">{data}</Paragraph>
    </StyledSingleData>
  );
}

export default SingleData;
