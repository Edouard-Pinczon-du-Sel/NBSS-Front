// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import LeafletMapFooter from './Leaflet';

// == Composant
function FooterMap() {
  return (
    <div className="map">
      <div className="map__infos">
        <div className="map__infos--container">
          <span className="map__title">Adresse :</span>
          <span className="map__data">54 Avenue de Nantes</span>
          <span className="map__data">Vieillevigne, 44116 </span>
          <span className="map__data">France</span>
        </div>
        <LeafletMapFooter />
      </div>
    </div>
  );
}

// == Export
export default FooterMap;
