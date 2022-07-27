// == Import
// import PropTypesLib from 'prop-types';
import '../styles.scss';
import reglement1 from '../../../../assets/images/infos-legales/reglement/reglement-page1.jpg';
import reglement2 from '../../../../assets/images/infos-legales/reglement/reglement-page2.jpg';
import reglement3 from '../../../../assets/images/infos-legales/reglement/reglement-page3.jpg';
import reglement4 from '../../../../assets/images/infos-legales/reglement/reglement-page4.jpg';
import reglement5 from '../../../../assets/images/infos-legales/reglement/reglement-page5.jpg';
import reglement6 from '../../../../assets/images/infos-legales/reglement/reglement-page6.jpg';
import reglement7 from '../../../../assets/images/infos-legales/reglement/reglement-page7.jpg';
import reglement8 from '../../../../assets/images/infos-legales/reglement/reglement-page8.jpg';
import reglement9 from '../../../../assets/images/infos-legales/reglement/reglement-page9.jpg';
import reglement10 from '../../../../assets/images/infos-legales/reglement/reglement-page10.jpg';

// == Composant
function ReglementPage() {
  return (
    <div className="reglement">
      <img className="reglement__img" src={reglement1} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement2} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement3} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement4} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement5} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement6} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement7} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement8} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement9} alt="charte de la personne accueillie" />
      <img className="reglement__img" src={reglement10} alt="charte de la personne accueillie" />
    </div>
  );
}

// == Export
export default ReglementPage;
