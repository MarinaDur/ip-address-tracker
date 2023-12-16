import { PuffLoader } from "react-spinners";
import { styled } from "styled-components";
import Flex from "./Flex";

const StyledLoader = styled(Flex)`
  width: 100%;
  height: auto;
  justify-content: center;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  background: white;
  max-width: 1200px;
  width: 85%;
  z-index: 858585;
  padding: 3rem;
  border-radius: 10px;
`;

function Loader() {
  return (
    <StyledLoader>
      <PuffLoader
        color="#368dd6"
        cssOverride={{}}
        size={80}
        speedMultiplier={1}
      />
    </StyledLoader>
  );
}

export default Loader;
