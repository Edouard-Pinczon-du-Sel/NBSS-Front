// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import img from '../../assets/images/7.jpg';

// == Composant
function ServiceDetails() {
  return (
    <div className="service--details">
      <img className="service--details__img" src={img} alt="service" />
      <h1 className="service--details__title">Service</h1>
      <p className="service--details__txt">lorem oo oooooooo ooooo oooooo ooo ooo aaa</p>
      <button className="service--details__btn" type="button">J'accède à ce service</button>
    </div>
  );
}

// == Export
export default ServiceDetails;
