// == Import
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import './stylesMediaQueries.scss';
// TODO maper sur les checkbox depuis les donées de l'api du back
// == Composant
function FormPersonne() {
  function handleDisplayYes() {
    const messageInput = document.querySelector('.selector');
    messageInput.classList.remove('display--none');
  }

  function handleDisplayNo() {
    const messageInput = document.querySelector('.selector');
    messageInput.classList.add('display--none');
  }
  return (
    <form>
      <div className="form--personne">
        <h1 className="form--personne__title">Service aide à la personne</h1>
        <div className="form--personne__container--input">
          <h2 className="form--personne__subtitle">Besoins pour de l'aide :</h2>
          <div className="form--personne__container--checkbox--1">
            <div className="form--personne__container--four--label">
              <div className="form--personne__container--label">
                <label htmlFor="need">à la toilette</label>
                <input className="form--personne__checkbox" type="checkbox" name="need" />
              </div>
              <div className="form--personne__container--label">
                <label htmlFor="need">à la douche</label>
                <input className="form--personne__checkbox" type="checkbox" name="need" />
              </div>
              <div className="form--personne__container--label">
                <label htmlFor="need">à la préparation des repas</label>
                <input className="form--personne__checkbox" type="checkbox" name="need" />
              </div>
              <div className="form--personne__container--label">
                <label htmlFor="need">à la prise de repas</label>
                <input className="form--personne__checkbox" type="checkbox" name="need" />
              </div>
            </div>
            <div className="form--personne__container--four--label">
            <div className="form--personne__container--label">
              <label htmlFor="need">aux courses</label>
              <input className="form--personne__checkbox" type="checkbox" name="need" />
            </div>
              <div className="form--personne__container--label">
                <label htmlFor="need">au lever</label>
                <input className="form--personne__checkbox" type="checkbox" name="need" />
              </div>
              <div className="form--personne__container--label">
                <label htmlFor="need">au coucher</label>
                <input className="form--personne__checkbox" type="checkbox" name="need" />
              </div>
              <div className="form--personne__container--label">
                <label htmlFor="need">à l'entretien du logement</label>
                <input className="form--personne__checkbox" type="checkbox" name="need" />
              </div>
            </div>
          </div>
          <h2 className="form--personne__subtitle">Moment d'intervention</h2>
          <div className="form--personne__container--checkbox--2">
            <div className="form--personne__container--label">
              <label htmlFor="moment">Matin</label>
              <input className="form--personne__checkbox" type="checkbox" name="moment" />
            </div>
            <div className="form--personne__container--label">
              <label htmlFor="moment">Midi</label>
              <input className="form--personne__checkbox" type="checkbox" name="moment" />
            </div>
            <div className="form--personne__container--label">
              <label htmlFor="moment">Après-midi</label>
              <input className="form--personne__checkbox" type="checkbox" name="moment" />
            </div>
            <div className="form--personne__container--label">
              <label htmlFor="moment">Soir</label>
              <input className="form--personne__checkbox" type="checkbox" name="moment" />
            </div>
          </div>
        </div>
        <input className="form--personne__input" type="number" placeholder="Nombre d'intervention(s) par semaine" />
        <h2 className="form--personne__subtitle">Bénéficiez-vous d'une aide financière</h2>
        <div className="form--personne__container--radio">
          <div className="form--personne__container--label">
            <label htmlFor="moment">Oui</label>
            <input className="form--personne__checkbox" type="radio" name="moment" onClick={handleDisplayYes} />
          </div>
          <div className="form--personne__container--label">
            <label htmlFor="moment">Non</label>
            <input className="form--personne__checkbox" type="radio" name="moment" onClick={handleDisplayNo} />
          </div>
        </div>
        <input className="form--personne__input display--none selector" type="number" placeholder="Par quel organisme ?" />
        <Link to="/services/form/validation"><button className="form--menagers__btn" type="submit">Suivant</button></Link>
      </div>
    </form>
  );
}

// == Export
export default FormPersonne;
