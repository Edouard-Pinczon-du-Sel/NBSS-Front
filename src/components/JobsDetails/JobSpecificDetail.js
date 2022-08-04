/* eslint-disable camelcase */
// == Import
import PropTypesLib from 'prop-types';
import './styles.scss';
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
  we_search,
  avantage,
  licence_requeried,
  experience_requeried,
  /* driveLicense, */
  type_contrat,
  salary,
  deplacement_info,
  day_off,
  opportunity,
  working_hour,
  drive_license,
}) {
  return (
    <acticle className="JobView">

      <section className="jobView__container jobView--main_title">
        <h1 className="jobView--main_title--content">
          {title}
        </h1>
      </section>

      <section className="jobView__container">
        <span className="jobView__text--date">
          <time dateTime={published_on.substring(0, 10)}>
            Posté le : {published_on.substring(0, 10)}
          </time>
        </span>

        <p className="jobView__text">
          {we_search}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">{title_description} :</h2>
        <p className="jobView__text">
          {description}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">{title_description2} :</h2>
        <p className="jobView__text">
          {description2}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">{title_description3} :</h2>
        <p className="jobView__text">
          {description3}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">Les avantages :</h2>
        <p className="jobView__text">
          {avantage}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">Type de contrat :</h2>
        <p className="jobView__text">
          {type_contrat}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">Salaire :</h2>
        <p className="jobView__text">
          {salary}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">Deplacement :</h2>
        <p className="jobView__text">
          {deplacement_info}
        </p>

        <hr className="separator" />
        <h2 className="jobView__text--title">Diplôme requis :</h2>
        <p className="jobView__text">
          {licence_requeried}
        </p>

        <hr className="separator" />

        {experience_requeried === null ? ''
          : (
            <><h2 className="jobView__text--title">Expérience requise :</h2>
              <p className="jobView__text">
                {experience_requeried}
              </p>
              <hr />
            </>
          )}

        <h2 className="jobView__text--title">Congé :</h2>
        <p className="jobView__text">
          {day_off}
        </p>

        <hr className="separator" />
        <h2 className="jobView__text--title">Permis de conduire :</h2>
        <p className="jobView__text">
          {drive_license === true ? 'Permis voiture obligatoire' : 'Permis voiture non-obligatoire'}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">Frais de déplacement :</h2>
        <p className="jobView__text">
          {deplacement_info}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">Etat du post :</h2>
        <p className="jobView__text">
          {opportunity}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">Horaires de travail :</h2>
        <p className="jobView__text">
          {working_hour}
        </p>

        <hr className="separator" />

        <h2 className="jobView__text--title">Jour de congé :</h2>
        <p className="jobView__text">
          {day_off}
        </p>

        <hr className="separator" />

        <a
          className="jobView__btn"
          href="mailto:nbserviceetsoinsrecrutement@gmail.com"
        >
          Postuler
        </a>
      </section>
    </acticle>

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
  we_search: PropTypesLib.string.isRequired,
  avantage: PropTypesLib.string.isRequired,
  licence_requeried: PropTypesLib.string.isRequired,
  experience_requeried: PropTypesLib.string.isRequired,
  /* driveLicense: PropTypesLib.string.isRequired, */
  type_contrat: PropTypesLib.string.isRequired,
  salary: PropTypesLib.string.isRequired,
  deplacement_info: PropTypesLib.string.isRequired,
  day_off: PropTypesLib.string.isRequired,
  opportunity: PropTypesLib.string.isRequired,
  working_hour: PropTypesLib.string.isRequired,
  drive_license: PropTypesLib.bool.isRequired,
};
// == Export
export default JobSpecificDetail;
