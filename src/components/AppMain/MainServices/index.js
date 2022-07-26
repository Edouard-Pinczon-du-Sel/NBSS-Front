// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import data from '../../../data/services';

import ServicesPreviews from './ServicesPreviews';

// == Composant
function MainServices() {
  return (
    <div className="services__list">
      {
        data.map((item) => (
          <ServicesPreviews key={item.id} name={item.name} link={item.link} alt={item.alt} />
        ))
      }
    </div>
  );
}

// == Export
export default MainServices;
