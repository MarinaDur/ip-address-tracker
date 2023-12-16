import { createContext, useCallback, useContext, useState } from "react";

const IpContext = createContext();

function IpProvider({ children }) {
  const [ip, setIp] = useState(null);
  const [location, setLocation] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [isp, setIsp] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState([51.505, -0.09]);

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch() {
    setSearch(searchValue);
    setSearchValue("");
  }

  const handleData = useCallback((data) => {
    if (data.messages === "Input correct domain.") {
      setIp(null);
      setLocation(null);
      setTimezone(null);
      setIsp(null);
    } else {
      setIp(data.ip || "Couldn't find the IP address");

      if (
        data.location.city &&
        data.location.region &&
        data.location.postalCode
      ) {
        setLocation(
          `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
        );
      } else if (
        !data.location.city &&
        !data.location.region &&
        !data.location.postalCode
      ) {
      } else {
        setLocation(
          `${data?.location?.city || ""} ${data?.location?.region || ""} ${
            data?.location?.postalCode || ""
          }`
        );
      }

      setTimezone(
        data.location.timezone
          ? `UTC ${data.location.timezone}`
          : "Couldn't find the time-zone"
      );

      setIsp(data.isp || "Couldn't find the ISP");
      setPosition(
        data.location.lat && data.location.lng
          ? [data.location.lat, data.location.lng]
          : [51.505, -0.09]
      );
    }
  }, []);

  function handleSubmit(e) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <IpContext.Provider
      value={{
        ip,
        setIp,
        location,
        setLocation,
        timezone,
        setTimezone,
        isp,
        setIsp,
        handleSearchValue,
        searchValue,
        handleSearch,
        search,
        handleData,
        position,
        handleSubmit,
      }}
    >
      {children}
    </IpContext.Provider>
  );
}

function useIp() {
  const context = useContext(IpContext);
  if (context === undefined)
    throw new Error("IpContext was used outside of the IpProvider");
  return context;
}

export { IpProvider, useIp };
