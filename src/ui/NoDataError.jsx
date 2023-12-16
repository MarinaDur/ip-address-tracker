import { styled } from "styled-components";
import Paragraph from "./Paragraph";
import Flex from "./Flex";

const StyledDiv = styled(Flex)`
  width: 85%;
  height: 200px;
  justify-content: center;
  max-width: 1200px;
  background: white;
  padding: 5rem 8rem;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  z-index: 88888;
  border-radius: 10px;
  text-align: center;
`;

function NoDataError() {
  return (
    <StyledDiv>
      <Paragraph $type="big" $job="error">
        Sorry, We couldn't find the IP/domain you were looking for.
      </Paragraph>
    </StyledDiv>
  );
}

export default NoDataError;
