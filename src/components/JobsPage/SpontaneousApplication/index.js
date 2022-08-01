// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function SpontaneousApplication() {
  return (
    <div className="Annoucement">
      <div className="Annoucement__container">
        <h1 className="Annoucement__title">
          <span className="Annoucement__title--name">
            En recherche d'un Emploi ?
          </span>
          <span className="Annoucement__title--disponibility">
            Déposez nous votre candidature spontanément.
          </span>
        </h1>
        <p className="Annoucement__text">
          Vous souhaitez déposer votre candidature spontanément ?<br />
          Envoyer nous :
          <ul className="Annoucement__text--list">
            <li>
              CV
            </li>
            <li>
              Lettre de Motivation
            </li>
            <li>
              Réference(optionnel)
            </li>
          </ul>
        </p>
        <a
          className="Annoucement__btn"
          href="mailto:nbserviceetsoinsrecrutement@gmail.com"
        >
          Postuler
        </a>
      </div>
    </div>
  );
}

// == Export
export default SpontaneousApplication;
