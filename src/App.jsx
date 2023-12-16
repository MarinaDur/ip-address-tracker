import styled from "styled-components";
import Header from "./components/Header";
import Map from "./components/Map";
import GlobalStyles from "./styles/GlobalStyles";
import Flex from "./ui/Flex";
import { IpProvider } from "./context/IpContext";

const StyledContainer = styled(Flex)`
  min-height: 100vh;
  gap: 0;
`;

function App() {
  return (
    <IpProvider>
      <StyledContainer>
        <GlobalStyles />
        <Header />
        <Map />
      </StyledContainer>
    </IpProvider>
  );
}

export default App;
