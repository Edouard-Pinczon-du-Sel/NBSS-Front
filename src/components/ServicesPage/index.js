// == Import
// import PropTypesLib from 'prop-types';
import Service from './Service';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function ServicesPage() {
  return (
    <div className="page--services">
      <div className="services--page">
        <h1 className="services--page__title">Nos Services</h1>
        <div className="services--page__container">
          <h1 className="services--page__container--title">Demander un service</h1>
          <p className="services--page__container--txt">
            Si vous savez déjà quel service vous voulez
            réserver cliquez sur ce formulaire, remplissez
            le puis validez le afin que votre demande soit
            prise en compte. Merci !
          </p>
          <button className="services--page__container--btn" type="button">Formulaire Service</button>
        </div>
      </div>
      <Service />
    </div>
  );
}

// == Export
export default ServicesPage;
