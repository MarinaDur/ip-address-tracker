import { styled } from "styled-components";
import { useIp } from "../context/IpContext";

const StyledSubmitBtn = styled.button`
  width: 15%;
  border: none;
  padding: 1.5rem;
  background: hsl(var(--color-very-dark-gray));
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: hsl(var(--color-neutral-off-black));
  }
`;

function SubmitBtn() {
  const { handleSearch } = useIp();

  return (
    <StyledSubmitBtn>
      <img src="icon-arrow.svg" alt="arrow" onClick={handleSearch} />
    </StyledSubmitBtn>
  );
}

export default SubmitBtn;
