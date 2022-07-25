// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import img from '../../assets/images/7.jpg';

// == Composant
function Service() {
  return (
    <>
      <div className="services--page__service">
        <div className="services--page__service--container">
          <img className="services--page__service--img" src={img} />
          <div className="services--page__service--container--content">
            <h1 className="services--page__service--title">Services 1</h1>
            <div className="services--page__services--container--txt">
              <p className="services--page__service--txt">
                llllllllllllllllllllllllllllllllllllllll
              </p>
            </div>
            <button className="services--page__service--btn" type="button">Lire la suite</button>
          </div>
        </div>
      </div>

      <div className="services--page__service">
        <div className="services--page__service--container">
          <img className="services--page__service--img" src={img} />
          <div className="services--page__service--container--content">
            <h1 className="services--page__service--title">Services 1</h1>
            <div className="services--page__services--container--txt">
              <p className="services--page__service--txt">
                llllllllllllllllllllllllllllllllllllllll
              </p>
            </div>
            <button className="services--page__service--btn" type="button">Lire la suite</button>
          </div>
        </div>
      </div>
    </>
  );
}

// == Export
export default Service;
