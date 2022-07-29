// == Import
// import PropTypesLib from 'prop-types';
// import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';
// TODO maper sur les checkbox depuis les donées de l'api du back
// == Composant
function FormGarde() {
  return (
    <div className="form--garde">
      <h1 className="form--garde__title">Vos informations personnelles</h1>
      <div className="form--garde__container--input">
        <input className="form--garde__input" type="number" placeholder="Nombre d'enfants" />
        <input className="form--garde__input" type="text" placeholder="Nombre d'heure par semaine" />
        <h2 className="form--garde__subtitle">Jours d'intervention</h2>
        <div className="form--garde__container--checkbox">
          <div className="form--garde__container--label">
            <label htmlFor="day">Lundi</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
          <div className="form--garde__container--label">
            <label htmlFor="day">Mardi</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
          <div className="form--garde__container--label">
            <label htmlFor="day">Mercredi</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
          <div className="form--garde__container--label">
            <label htmlFor="day">Jeudi</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
          <div className="form--garde__container--label">
            <label htmlFor="day">Vendredi</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
        </div>
        <h2 className="form--garde__subtitle">Moment d'intervention</h2>
        <div className="form--garde__container--checkbox">
          <div className="form--garde__container--label">
            <label htmlFor="day">Matin</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
          <div className="form--garde__container--label">
            <label htmlFor="day">Après-midi</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
          <div className="form--garde__container--label">
            <label htmlFor="day">Soir</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
          <div className="form--garde__container--label">
            <label htmlFor="day">Journée</label>
            <input className="form--garde__checkbox" type="checkbox" name="day" />
          </div>
        </div>
      </div>
      <button className="form--garde__btn" type="button">Suivant</button>
    </div>
  );
}

// == Export
export default FormGarde;
