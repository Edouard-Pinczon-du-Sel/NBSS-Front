/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Input from './FormInfos/Input';
import SelectService from './FormInfos/SelectService';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
import FormAdmin from './FormAdmin';
import FormGarde from './FormGarde';
import FormMenagers from './FormMenagers';
import FormPersonne from './FormPersonne';

function AppForm() {
  const contactForm = useSelector((state) => state.form.contact);
  const currentSelectService = useSelector((state) => state.form.serviceSelected);
  const formSelectService = useSelector((state) => state.form.servicesForm);
  console.log('Liste des Services menant au JSX : ', formSelectService);
  const filterForm = formSelectService.find((obj) => obj.index === currentSelectService);
  console.log('filterForm => ', filterForm);
  // console.log(filterForm != undefined ? 'filterForm Value => '.filterForm.form : 'non-définit');
  return (
    <form>
      <div className="form--infos">
        <h1 className="form--infos__title">Vos informations personnelles</h1>
        <div className="form--infos__container--input">
          {
            Object.keys(contactForm).map((index, key) => <Input key={key} inputName={index} />)
          }
        </div>
        <h1 className="form--infos__title--choice">Cliquez sur le service de votre choix</h1>
        <SelectService />

        {
          /*  TODO Version final dynamique / responsive en full Déclaratif via le state.
          * Objectif: Rendre le formulaire en champs contrôlé absolu :
          *
          * Première étape : Contact (information communes entre chaque Services) Déclaratif //? DONE
          * Deuxième étapes : Menu déroulant avec state permettant de faire le choix entre les différent service proposé. //? DONE
          * Troisième étapes : Au choix du service faire apparaitre la suite du Formulaire lié //! IN PROGRESSE
          * Géré la page Récapitulatif et y ajouter la dernière étape Content (=> information complémentaire + Propostion rappel mobile Oui/Non)
          * Mettre en forme un dernier state "Recapitulatif" dans la mise en forme du back souhaiter.
          */
        }
        <p>{currentSelectService}</p>
        <p>
          {currentSelectService !== '--Choix du service--' ? <filterForm.form /> : ' veuillez choisir un service' }
        </p>
        <p>Recapitulatif</p>
        <p>info suplémentaire</p>
        <p>submit</p>
      </div>
    </form>
  );
}

// == Export
export default AppForm;
