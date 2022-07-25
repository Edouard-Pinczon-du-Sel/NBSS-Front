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
            En recherche d'un Emploie ?
          </span>
          <span className="Annoucement__title--disponibility">
            Déposez notre votre candidature spontanément.
          </span>
        </h1>
        <p className="Annoucement__text">
          Vous souhaitez déposer votre candidateure spontannément ?
          <ul>
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
