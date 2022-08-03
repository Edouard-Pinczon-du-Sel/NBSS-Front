/* eslint-disable camelcase */
// == Import
import PropTypesLib from 'prop-types';
import './stylesMediaQueries.scss';

// == Composant
function JobSpecificDetail({
  title,
  /* visibility, */
  published_on,
  title_description,
  description,
  title_description2,
  description2,
  title_description3,
  description3,
  weSearch,
  avantage,
  licence_requeried,
  experience_requeried,
  /* driveLicense, */
  type_contrat,
  salary,
  deplacement_info,
  day_off,
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
                {published_on}
              </time>
            </span>
            {weSearch}
          </p>
          <p className="job__text">
            <span className="job__text--title">{title_description}</span>
            {description}
          </p>
          <p className="job__text">
            <span className="job__text--title">{title_description2}</span>
            {description2}
          </p>
          <p className="job__text">
            <span className="job__text--title">{title_description3}</span>
            {description3}
          </p>
          <p className="job__text">
            {avantage}
          </p>
          <p className="job__text">
            Type de contrat : {type_contrat}
          </p>
          <p className="job__text">
            Salaire : {salary}
          </p>
          <p className="job__text">
            Deplacement : {deplacement_info}
          </p>
          <p className="job__text">
            {licence_requeried}
          </p>
          <p className="job__text">
            Expérience requise : {experience_requeried}
          </p>
          <p className="job__text">
            Congé : {day_off}
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

JobSpecificDetail.defaultProps = {
  title_description2: '',
  description2: '',
  title_description3: '',
  description3: '',
};

JobSpecificDetail.propTypes = {
  title: PropTypesLib.string.isRequired,
  /* visibility: PropTypesLib.string.isRequired, */
  published_on: PropTypesLib.string.isRequired,
  title_description: PropTypesLib.string.isRequired,
  description: PropTypesLib.string.isRequired,
  title_description2: PropTypesLib.string,
  description2: PropTypesLib.string,
  title_description3: PropTypesLib.string,
  description3: PropTypesLib.string,
  weSearch: PropTypesLib.string.isRequired,
  avantage: PropTypesLib.string.isRequired,
  licence_requeried: PropTypesLib.string.isRequired,
  experience_requeried: PropTypesLib.string.isRequired,
  /* driveLicense: PropTypesLib.string.isRequired, */
  type_contrat: PropTypesLib.string.isRequired,
  salary: PropTypesLib.string.isRequired,
  deplacement_info: PropTypesLib.string.isRequired,
  day_off: PropTypesLib.string.isRequired,
  opportunity: PropTypesLib.string.isRequired,
  workingHour: PropTypesLib.string.isRequired,
};
// == Export
export default JobSpecificDetail;
