// == Import
// import PropTypesLib from 'prop-types';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';

// == Composant
function LeafletMapFooter() {
  const NBpos = [46.977524062406474, -1.4383113903476752];

  return (
    <MapContainer className="map__L" center={NBpos} zoom={25} scrollWheelZoom>
      <TileLayer
        attribution="&copy; OpenStreetMap France"
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
      />
      <Marker position={NBpos}>
        <Popup>
          Nous sommes ICI <br />NB SOINS ET SERVICES
        </Popup>
      </Marker>
    </MapContainer>
  );
}

// == Export
export default LeafletMapFooter;
