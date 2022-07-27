// == Import
// import PropTypesLib from 'prop-types';
import './stylesLegacySpecificPage.scss';
import infos1 from '../../../../assets/images/infos-legales/infos-society/infos1.jpg';
import infos2 from '../../../../assets/images/infos-legales/infos-society/infos2.jpg';
import infos3 from '../../../../assets/images/infos-legales/infos-society/infos3.jpg';
import infos4 from '../../../../assets/images/infos-legales/infos-society/infos4.jpg';

// == Composant
function SocietyPage() {
  return (
    <div className="society">
      <img className="society__img--society" src={infos1} alt="informations société" />
      <img className="society__img--society" src={infos2} alt="informations société" />
      <img className="society__img--society" src={infos3} alt="informations société" />
      <img className="society__img--society" src={infos4} alt="informations société" />
    </div>
  );
}

// == Export
export default SocietyPage;
