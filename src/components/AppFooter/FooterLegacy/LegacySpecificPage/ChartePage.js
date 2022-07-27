// == Import
// import PropTypesLib from 'prop-types';
import './stylesLegacySpecificPage.scss';
import charte from '../../../../assets/images/infos-legales/charte.jpg';

// == Composant
function ChartePage() {
  return (
    <div className="charte">
      <img className="charte__img" src={charte} alt="charte de la personne accueillie" />
    </div>
  );
}

// == Export
export default ChartePage;
