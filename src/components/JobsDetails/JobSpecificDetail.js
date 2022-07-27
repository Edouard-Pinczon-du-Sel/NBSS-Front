// == Import
import PropTypesLib from 'prop-types';
import './stylesMediaQueries.scss';

// == Composant
function JobSpecificDetail({
  title,
  /* visibility, */
  publishedOn,
  titleDescription,
  description,
  titleDescription2,
  description2,
  titleDescription3,
  description3,
  weSearch,
  avantage,
  licenceRequeried,
  experienceRequeried,
  /* driveLicense, */
  typeContrat,
  salary,
  deplacementInfo,
  dayOff,
  opportunity,
  workingHour,
}) {
  return (
    <div className="preview">
      <div className="job job--details">
        <div className="job__container">
          <h1 className="job__title">
            <span className="job__title--name">
              {title}
            </span>
            <span className="job__title--disponibility">
              {
                // TODO Faire une ternaire affichage oui/non
              }
              {/*
                (Post disponible) Mettre une ternaire
                avec visibility et class display none ou
                visible
              */
                }
            </span>
          </h1>
          <p className="job__text">
            <span className="job__text--date">
              <time dateTime="2022-11-18">
                {publishedOn}
              </time>
            </span>
            {weSearch}
          </p>
          <p className="job__text">
            <span className="job__text--title">{titleDescription}</span>
            {description}
          </p>
          <p className="job__text">
            <span className="job__text--title">{titleDescription2}</span>
            {description2}
          </p>
          <p className="job__text">
            <span className="job__text--title">{titleDescription3}</span>
            {description3}
          </p>
          <p className="job__text">
            {avantage}
          </p>
          <p className="job__text">
            Type de contrat : {typeContrat}
          </p>
          <p className="job__text">
            Salaire : {salary}
          </p>
          <p className="job__text">
            Deplacement : {deplacementInfo}
          </p>
          <p className="job__text">
            {licenceRequeried}
          </p>
          <p className="job__text">
            Expérience requise : {experienceRequeried}
          </p>
          <p className="job__text">
            Congé : {dayOff}
          </p>
          <p className="job__text">
            {opportunity}
          </p>
          <p className="job__text">
            {workingHour}
          </p>
          <a
            className="job__btn"
            href="mailto:nbserviceetsoinsrecrutement@gmail.com"
          >
            Postuler
          </a>
        </div>
      </div>
    </div>
  );
}

JobSpecificDetail.propTypes = {
  title: PropTypesLib.string.isRequired,
  /* visibility: PropTypesLib.string.isRequired, */
  publishedOn: PropTypesLib.string.isRequired,
  titleDescription: PropTypesLib.string.isRequired,
  description: PropTypesLib.string.isRequired,
  titleDescription2: PropTypesLib.string.isRequired,
  description2: PropTypesLib.string.isRequired,
  titleDescription3: PropTypesLib.string.isRequired,
  description3: PropTypesLib.string.isRequired,
  weSearch: PropTypesLib.string.isRequired,
  avantage: PropTypesLib.string.isRequired,
  licenceRequeried: PropTypesLib.string.isRequired,
  experienceRequeried: PropTypesLib.string.isRequired,
  /* driveLicense: PropTypesLib.string.isRequired, */
  typeContrat: PropTypesLib.string.isRequired,
  salary: PropTypesLib.string.isRequired,
  deplacementInfo: PropTypesLib.string.isRequired,
  dayOff: PropTypesLib.string.isRequired,
  opportunity: PropTypesLib.string.isRequired,
  workingHour: PropTypesLib.string.isRequired,
};
// == Export
export default JobSpecificDetail;
