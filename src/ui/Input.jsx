import { styled } from "styled-components";
import { useIp } from "../context/IpContext";

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  padding: 1.5rem;
  font-size: 1.6rem;
  width: 85%;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 1.3rem;
  }
`;

function Input() {
  const { handleSearchValue, searchValue, handleSubmit } = useIp();
  return (
    <>
      <StyledLabel> </StyledLabel>
      <StyledInput
        id="search"
        type="text"
        placeholder="Search for any IP address or domain"
        value={searchValue}
        onChange={handleSearchValue}
        onKeyDown={handleSubmit}
      />
    </>
  );
}

export default Input;
