import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { styled } from "styled-components";
import L from "leaflet";
import { useIp } from "../context/IpContext";

const StyledMap = styled.div`
  /* height: 58%; */
  height: calc(100vh - 290px);
  width: 100vw;
  position: relative;
  width: 100vw;
  position: relative;

  .leaflet-container {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 250px);
  }

  @media (min-width: 1200px) {
    height: calc(100vh - 270px);
  }
`;

function Map() {
  const defaultPosition = [51.505, -0.09];
  const { position = defaultPosition } = useIp();
  const [lat, lng] = position;

  const customIcon = new L.Icon({
    iconUrl: "icon-location.svg",
    iconSize: [40, 50],
    // iconAnchor: [16, 32],
  });

  return (
    <StyledMap>
      <MapContainer
        center={[lat + 0.006, lng]}
        zoom={14}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}></Marker>
        <ChangeCenter position={[lat + 0.006, lng]} />
      </MapContainer>
    </StyledMap>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}

export default Map;
