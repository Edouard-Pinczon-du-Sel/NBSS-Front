// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// Mettre lien vers la doc sur button

// == Composant
function LegacyPage() {
  return (
    <div className="legacy--page">
      <h1 className="legacy--page__title--page">Mentions Légales</h1>
      <div className="legacy--page__container">
        <div className="legacy--page__chart">
          <h1 className="legacy--page__title">CHARTE DE LA PERSONNE ACCUEILLIE</h1>
          <p className="legacy--page__txt">
            La charte de la personne acceuillie est
            un document requis depuis l'arrếté du 8
            Septembre 2003 qui stipule que toute entreprise
            de services et de soins doit la respecter
          </p>
          <Link to="/mentions-legales/charte"><button className="legacy--page__btn" type="button">Voir le document</button></Link>
        </div>
        <div className="legacy--page__reglement">
          <h1 className="legacy--page__title">RÈGLEMENT DE FONCTIONNEMENT DU SERVICE D'AIDE À DOMICILE</h1>
          <p className="legacy--page__txt">
            Ce document définit les règles générales d’organisation
            et de fonctionnement du Service prestataire d’Aide à Domicile
            NB Services et Soins dans le respect des droits et libertés de chacun. Ce règlement
            de fonctionnement est révisable tous les 5 ans sauf disposition particulière.
          </p>
          <Link to="/mentions-legales/reglement"><button className="legacy--page__btn" type="button">Voir le document</button></Link>
        </div>
        <div className="legacy--page__legacy">
          <h1 className="legacy--page__title">INFORMATIONS LÉGALES</h1>
          <p className="legacy--page__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has
          </p>
          <Link to="/mentions-legales/societe"><button className="legacy--page__btn" type="button">Voir le document</button></Link>
        </div>
      </div>
    </div>
  );
}

// == Export
export default LegacyPage;
