// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import img from '../../../assets/images/map.png';

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
        <img className="map__img" src={img} alt="map" />
      </div>
    </div>
  );
}

// == Export
export default FooterMap;
