import { styled } from "styled-components";
import Heading from "../ui/Heading";
import Flex from "../ui/Flex";
import Search from "./Search";
import LocationData from "./LocationData";

const StyledHeader = styled(Flex)`
  width: 100vw;
  height: 290px;
  background: url("pattern-bg-mobile.png") no-repeat center top;
  background-size: cover;
  padding: 3rem;
  gap: 2.5rem;
  position: relative;

  @media (min-width: 1024px) {
    height: 250px;
    padding: 4rem 3rem;
    background: url("pattern-bg-desktop.png") no-repeat center top;
    background-size: cover;
  }
  @media (min-width: 1200px) {
    height: 270px;
    padding: 4rem 3rem;
  }
`;

function Header() {
  return (
    <StyledHeader as="header">
      <Heading>IP Address Tracker</Heading>
      <Search />
      <LocationData />
    </StyledHeader>
  );
}

export default Header;
