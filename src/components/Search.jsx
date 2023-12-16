import { styled } from "styled-components";
import Input from "../ui/Input";
import Flex from "../ui/Flex";
import SubmitBtn from "../ui/SubmitBtn";

const StyledSearch = styled(Flex)`
  flex-direction: row;
  gap: 0;
  width: 100%;
  max-width: 500px;
`;

function Search() {
  return (
    <StyledSearch>
      <Input />
      <SubmitBtn />
    </StyledSearch>
  );
}

export default Search;
