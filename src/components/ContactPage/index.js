// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import './stylesMediaQueries.scss';
import img from '../../assets/images/img-logo/logoContact.png';

// == Composant
function ContactPage() {
  return (
    <div className="contact--page">
      <img className="contact--page__img" src={img} alt="logo" />
      <h1 className="contact--page__title">Comment nous contacter ?</h1>
      <div className="contact--page__container--data">
        <span className="contact--page__email"><p className="contact--page__label--data">E-mail de l'entreprise :</p> nbservicesetsoins@gmail.com</span>
        <span className="contact--page__phone"><p className="contact--page__label--data">Numéro de téléphone :</p> 06 25 59 18 11 &#40;joignable du lundi au vendredi de 9:00 à 18:00 et le samedi de 9h30 à 12h30&#41;</span>
        <span className="contact--page__adress"><p className="contact--page__label--data">Au 54 Avenue de Nantes 44116 Vieillevigne sans rendez-vous :</p>le Mardi de 14:00 à 17:00 et le Samedi de 9h30 à 12h30 </span>
      </div>
      <button className="contact--page__btn" type="button"><a href="mailto:nbservicesetsoins@gmail.com">Contactez nous</a></button>
    </div>
  );
}

// == Export
export default ContactPage;
