// == Import
import './styles.scss';
import './stylesMediaQueries.scss';
import imgFinance from '../../../assets/images/infos-legales/financement.png';

// == Composant
function InfosPage() {
  return (
    <div className="infos--page">
      <h1 className="infos--page__title">Informations Générales sur NB SERVICES ET SOINS</h1>
      <p className="infos--page__txt">
        NB SERVICES ET SOINS , une équipe de professionnels de santé, au service
        de ses bénéficiaires. Nous travaillons en partenariat avec les différents
        acteurs du département : Conseil Départemental (APA), Maison Départementale
        des Personnes en situation de Handicap (MDPH), l’Hospitalisation à Domicile
        (HAD), Caisses de retraite, mutuelles, CLIC, professionnels de santé libéraux…
      </p>
      <h2 className="infos--page__subtitle">Vous disposez aussi d'un droit d'aide au financement par certains organismes</h2>
      <img className="infos--page__img" src={imgFinance} alt="Organismes d'aide au financement" />
      <h2 className="infos--page__subtitle">LE PARCOURS NB SERVICES ET SOINS</h2>
      <div className="infos--page__container--txt">
        <span className="infos--page__txt">1- La demande d’intervention, par appel téléphonique, mail ou en agence</span>
        <span className="infos--page__txt">
          2- L’évaluation par l’encadrant à votre domicile pour définir les besoins,
          élaboration du devis et établissement du planning
        </span>
        <span className="infos--page__txt">
          3- La mise en place de l’intervention : l’intervenant est accompagné par
          l’encadrant pour les présentations
        </span>
        <span className="infos--page__txt">
          4- Le suivi des interventions : l’encadrant est joignable par téléphone au quotidien
          du lundi au vendredi de 9h à 18h et une astreinte est en place en dehors de ces horaires.
          L’agence est ouverte le mardi de 14h à 17h et le samedi de 9h30 à 12h30.
          Chaque année une enquête de satisfaction est envoyée afin d’évaluer les prestations
          en lien avec la démarche qualité.
        </span>
        <span className="infos--page__txt">
          5- La facturation :chaque mois le bénéficiaire reçoit la facture et chaque année
          son attestation fiscale.
        </span>
      </div>
    </div>
  );
}

// == Export
export default InfosPage;
