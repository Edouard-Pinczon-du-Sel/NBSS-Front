// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';
import img from '../../../assets/images/7.jpg';
import ServicesPreviews from './ServicesPreviews';

const dataExempleHomeServices = {
  data: [
    {
      id: '1',
      name: 'Aides ménagères',
      link: img,
      alt: 'fakeimg 800x300',
    },
    {
      id: '2',
      name: "Gardes d'enfants",
      link: img,
      alt: 'fakeimg 800x250',
    },
    {
      id: '3',
      name: 'Aides à la personne',
      link: img,
      alt: 'fakeimg 800x400',
    },
    {
      id: '4',
      name: 'Aides administrative après décès',
      link: img,
      alt: 'fakeimg 1000x500',
    },
  ],
};

// == Composant
function MainServices() {
  return (
    <div className="services__list">
      {
        dataExempleHomeServices.data.map((item) => (
          <ServicesPreviews key={item.id} name={item.name} link={item.link} alt={item.alt} />
        ))
      }
    </div>
  );
}

// == Export
export default MainServices;
