// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function FooterHoraires() {
  return (
    <div className="horaires">
      <span className="horaires__title">Notre bureau est ouvert sans rendez-vous les</span>
      <div className="horaires__container--data">
        <hr className="horaires__border" />
        <span className="horaires__data">Mardi : 14:00 - 17:00 Samedi : 9h30 - 12:30</span>
      </div>
    </div>
  );
}

// == Export
export default FooterHoraires;
