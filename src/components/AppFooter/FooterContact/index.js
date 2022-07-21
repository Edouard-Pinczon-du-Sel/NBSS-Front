// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function FooterContact() {
  return (
    <div className="contact">
      <h3 className="contact__title">Contact :</h3>
      <h4 className="contact__label">Mobile :</h4>
      <h4 className="contact__data">06 25 59 18 11</h4>
      <p className="contact__data--infos">lundi au vendredi de 9h à 18h et samedi de 9h30 à 12h30</p>
      <h4 className="contact__label">Mail :</h4>
      <h4 className="contact__data">nbservicesetsoins@gmail.com</h4>
    </div>
  );
}

// == Export
export default FooterContact;
