// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import img from '../../../assets/images/7.jpg';

// == Composant
function MainServices() {
  return (
    <div className="services__list">
      {/* Rajouter titre nos services */}
      <div className="services">
        <div className="services__container">
          <h1 className="services__title">Services 1</h1>
          <img className="services__img" src={img} />
          <button className="services__btn" type="button">Consulter</button>
        </div>
      </div>

      <div className="services">
        <div className="services__container">
          <h1 className="services__title">Services 1</h1>
          <img className="services__img" src={img} />
          <button className="services__btn" type="button">Consulter</button>
        </div>
      </div>

      <div className="services">
        <div className="services__container">
          <h1 className="services__title">Services 1</h1>
          <img className="services__img" src={img} />
          <button className="services__btn" type="button">Consulter</button>
        </div>
      </div>

      <div className="services">
        <div className="services__container">
          <h1 className="services__title">Services 1</h1>
          <img className="services__img" src={img} />
          <button className="services__btn" type="button">Consulter</button>
        </div>
      </div>
    </div>
  );
}

// == Export
export default MainServices;
