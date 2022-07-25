// == Import
// import PropTypesLib from 'prop-types';
import MainCarousel from './MainCarousel';
import MainServices from './MainServices';
import './stylesMediaQueries.scss';

const dataExempleHomeServices = {
  data: [
    {
      id: '1',
      name: 'Aides ménagères',
      link: 'https://fakeimg.pl/800x300/',
      alt: 'fakeimg 800x300',
    },
    {
      id: '2',
      name: "Gardes d'enfants",
      link: 'https://fakeimg.pl/800x250/',
      alt: 'fakeimg 800x250',
    },
    {
      id: '3',
      name: 'Aides à la personne',
      link: 'https://fakeimg.pl/800x400/',
      alt: 'fakeimg 800x400',
    },
    {
      id: '4',
      name: 'Aides administrative après décès',
      link: 'https://fakeimg.pl/1000x500/',
      alt: 'fakeimg 1000x500',
    },
  ],
};

// == Composant
function AppMain() {
  return (
    <main className="main">
      <MainCarousel />
      <div className="preview">
        <MainServices dataServices={dataExempleHomeServices} />
      </div>
    </main>
  );
}

// == Export
export default AppMain;
