// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/7.jpg';

// == Composant
function JobsList() {
  return (
    <div className="job__list">
      {/* Rajouter titre nos services */}
      <div className="job">
        <div className="job__container">
          <h1 className="job__title">
            <span className="job__title--name">
              Job Title
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
          <Link
            to="/emplois/details"
            className="job__btn"
          >
            En savoir plus
          </Link>
        </div>
      </div>
      <div className="job">
        <div className="job__container">
          <h1 className="job__title">
            <span className="job__title--name">
              Job Title
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
          <Link
            to="/emplois/details"
            className="job__btn"
          >
            En savoir plus
          </Link>
        </div>
      </div>
      <div className="job">
        <div className="job__container">
          <h1 className="job__title">
            <span className="job__title--name">
              Job Title
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
          <Link
            to="/emplois/details"
            className="job__btn"
          >
            En savoir plus
          </Link>
        </div>
      </div>
      <div className="job">
        <div className="job__container">
          <h1 className="job__title">
            <span className="job__title--name">
              Job Title
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
          <Link
            to="/emplois/details"
            className="job__btn"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}

// == Export
export default JobsList;
