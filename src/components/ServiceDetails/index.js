// == Import
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ServiceSpecificsDetails from './ServiceSpecificsDetails';
// import PropTypesLib from 'prop-types';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function ServiceDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const param = useParams();
  const dataService = useSelector(
    (state) => state.services.list.find((service) => service.id === param.id),
  );
  return (
    <>
      {

        [dataService].map((item) => (
          <ServiceSpecificsDetails
            key={item.id}
            link={item.link}
            alt={item.alt}
            name={item.name}
            explications={item.explications}
          />
        ))
      }
    </>
  );
}

// == Export
export default ServiceDetails;
