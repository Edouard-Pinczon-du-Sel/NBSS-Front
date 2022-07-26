// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function ServiceDetails() {
  return (
    <div className="service--details">
      <img className="service--details__img" src="#" alt="service" />
      <h1 className="service--details__title">Service</h1>
      <p className="service--details__txt">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button className="service--details__btn" type="button">J'accède à ce service</button>
    </div>
  );
}

// == Export
export default ServiceDetails;
