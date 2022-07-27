// == Import
// import PropTypesLib from 'prop-types';
import './stylesMediaQueries.scss';

// == Composant
function JobSpecificDetail({
  title,
  visibility,
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
  driveLicense,
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
              (Post disponible)
            </span>
          </h1>
          <p className="job__text">
            Job text preview : hic dolorem quisquam et
            voluptatem mollitia eos provident illo sit
            perferendis iusto. Qui dolorem consequatur
            et voluptatem quos qui ipsam beatae nam
            internos molestiae.
            <span className="job__text--date">
              <time dateTime="2022-11-18">
                2022-11-18
              </time>
            </span>
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


// == Export
export default JobSpecificDetail;
