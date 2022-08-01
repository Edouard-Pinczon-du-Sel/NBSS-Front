// == Import
import PropTypesLib from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchJobs } from '../../../actions/jobs';

// == Composant
function JobsList({
  title,
  weSearch,
  id,
}) {
  // console.log(id);
  return (
    <div className="job">
      <div className="job__container">
        <h1 className="job__title">
          <span className="job__title--name">
            { title }
          </span>
          <span className="job__title--disponibility">
            (Post disponible)
          </span>
        </h1>
        <p className="job__text">
          { weSearch }
          <span className="job__text--date">
            <time dateTime="2022-11-18">
              2022-11-18
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
};

// == Export
export default JobsList;
