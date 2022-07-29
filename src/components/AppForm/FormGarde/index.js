// == Import
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';
// TODO maper sur les checkbox depuis les donées de l'api du back
// == Composant
function FormGarde() {
  return (
    <form>
      <div className="form--garde">
        <h1 className="form--garde__title">Service garde enfants</h1>
        <div className="form--garde__container--input">
          <input className="form--garde__input" type="number" placeholder="Nombre d'enfants" />
          <input className="form--garde__input" type="number" placeholder="Nombre d'heure par semaine" />
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
        <Link to="/services/form/validation"><button className="form--menagers__btn" type="button">Suivant</button></Link>
      </div>
    </form>
  );
}

// == Export
export default FormGarde;
