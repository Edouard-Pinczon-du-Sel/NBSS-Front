// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function FooterHoraires() {
  return (
    <div className="horaires">
      <h4 className="horaires__title">Notre bureau est ouvert sans rendez-vous les</h4>
      <div className="horaires__container--data">
        <div className="horaires__border" />
        <h3 className="horaires__data">Mardi : 14:00 - 17:00</h3>
        <h3 className="horaires__data">Samedi : 9h30 - 12:30</h3>
      </div>
    </div>
  );
}

// == Export
export default FooterHoraires;
