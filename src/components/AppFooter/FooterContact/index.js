// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function FooterContact() {
  return (
    <div className="contact">
      <span className="contact__title">Contact :</span>
      <span className="contact__label">Mobile : <a href="tel:+336 25 59 18 11"><span className="contact__data">06 25 59 18 11</span></a></span>
      <span className="contact__data--infos">lundi au vendredi de 9h à 18h et samedi de 9h30 à 12h30</span>
      <span className="contact__label">
        Mail :<a href="mailto:nbservicesetsoins@gmail.com"><span className="contact__data"> nbservicesetsoins@gmail.com</span></a>
      </span>
    </div>
  );
}

// == Export
export default FooterContact;
