import { styled } from "styled-components";
import Flex from "../ui/Flex";
import SingleData from "./SingleData";
import { useEffect, useState } from "react";
import { useIp } from "../context/IpContext";
import NoDataError from "../ui/NoDataError";
import { getMyLocation } from "../hooks/getLocation";
import Loader from "../ui/Loader";

const StyledLocationData = styled(Flex)`
  gap: 2rem;
  background: hsl(var(--color-white));
  width: 83%;
  padding: 1.5rem;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  box-shadow: 0px 18px 38px -14px hsl(var(--color-dark-gray));
  -webkit-box-shadow: 0px 18px 38px -14px hsl(var(--color-dark-gray));
  -moz-box-shadow: 0px 18px 38px -14px hsl(var(--color-dark-gray));
  z-index: 9999;
  max-width: 1200px;
  overflow-wrap: break-word;

  @media (min-width: 768px) {
    display: grid;
    padding: 2rem;
    gap: 0.5rem;
    grid-template-columns: repeat(4, 1fr);
    align-items: start;

    & > :not(:last-child)::after {
      content: "";
      width: 1px;
      height: 80%;
      background: hsl(var(--color-dark-gray));
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      margin-left: 2px;
      margin-right: 2px;
    }
  }

  @media (min-width: 1200px) {
    padding: 4rem 3rem;
    gap: 1.5rem;
  }
`;

function LocationData() {
  const { ip, location, timezone, isp, search, handleData } = useIp();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getMyLocation(search);
        handleData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching location data:", error.message);
      }
    };

    fetchData();
  }, [search, handleData]);

  return isLoading ? (
    <Loader />
  ) : ip && location && timezone && isp ? (
    <StyledLocationData>
      <SingleData name="IP Address" data={ip} />
      <SingleData name="Location" data={location} />
      <SingleData name="Timezone" data={timezone} />
      <SingleData name="ISP" data={isp} />
    </StyledLocationData>
  ) : (
    <NoDataError />
  );
}

export default LocationData;
