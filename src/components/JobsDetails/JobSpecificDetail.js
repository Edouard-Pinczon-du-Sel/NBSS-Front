// == Import
// import PropTypesLib from 'prop-types';
import './stylesMediaQueries.scss';

// == Composant
function JobSpecificDetail({
  titleGlobal,
  titleDescription1,
  description1,
  titleDescription2,
  description2,
  titleDescription3,
  description3,
  weSearch,
  avantages,
  licencesRequeried,
  driveLicence,
  typeContrat,
  salaire,
  deplacementInfo,
  dayOff,
  opportunity,
}) {
console.log(titleGlobal, 'test');
  return (
    <div className="preview">
      <div className="job job--details">
        <div className="job__container">
          <h1 className="job__title">
            <span className="job__title--name">
              {titleGlobal}
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
