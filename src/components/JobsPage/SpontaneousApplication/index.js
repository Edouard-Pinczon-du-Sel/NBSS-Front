// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function SpontaneousApplication() {
  return (
    <div className="job">
      <div className="job__container">
        <h1 className="job__title">
          <span className="job__title--name">
            En recherche d'un Emploie ?
          </span>
          <span className="job__title--disponibility">
            Déposez notre votre candidature spontanément.
          </span>
        </h1>
        <p className="job__text">
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
          className="job__btn"
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
