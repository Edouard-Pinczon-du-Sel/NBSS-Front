// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import img from '../../../assets/images/map.png';

// == Composant
function FooterMap() {
  return (
    <div className="map">
      <div className="map__infos">
        <h3 className="map__title">Adresse :</h3>
        <h4 className="map__data">54 Avenue de Nantes</h4>
        <h4 className="map__data">44116 Vieillevigne</h4>
        <h4 className="map__data">France</h4>
        <img className="map__img" src={img} alt="map" />
      </div>
    </div>
  );
}

// == Export
export default FooterMap;
