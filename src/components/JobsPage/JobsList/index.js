// == Import
import PropTypesLib from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// == Composant
function JobsList({
  title,
  weSearch,
  id,
  visibility,
  opportunity,
  date,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(id);
  return (
    <div className="job">
      <div className="job__container">
        <h1 className="job__title">
          <span className="job__title--name">
            { title }
          </span>
          <span className="job__title--disponibility">
            { visibility ? '(Post disponible)' : '' }
          </span>
        </h1>
        <p className="job__text">
          { weSearch }
        </p>
        <p className="job__text">
          { opportunity }
          <span className="job__text--date">
            <time dateTime="2022-11-18">
              Posté le : {date.substring(0, 10)}
            </time>
          </span>
        </p>
        <Link
          to={`/emplois/${id}`}
          className="job__btn"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
}

JobsList.propTypes = {
  title: PropTypesLib.string.isRequired,
  weSearch: PropTypesLib.string.isRequired,
  id: PropTypesLib.number.isRequired,
  visibility: PropTypesLib.bool.isRequired,
  opportunity: PropTypesLib.string.isRequired,
  date: PropTypesLib.string.isRequired,
};

export default JobsList;
