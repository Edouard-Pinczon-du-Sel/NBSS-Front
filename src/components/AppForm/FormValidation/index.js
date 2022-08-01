// == Import
// import PropTypesLib from 'prop-types';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { changeContactValue } from '../../../actions/form';
import TextArea from '../FormComponent/TextArea';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormValidation() {
  const contactRecap = useSelector((state) => state.form.recap.contact);
  const contactForm = useSelector((state) => state.form.miseEnPage.contact);
  return (
    <form>
      <div className="form--validation">
        <h1 className="form--validation__title">Validation</h1>
        <div className="form--validation__container--txtarea">
          <label className="form--validation__label" htmlFor="content">Quelques choses à nous spécifier en plus ? Des détails, inquiétudes, questions ? </label>
          <TextArea
            name="content"
            value={contactRecap.content}
            placeHolderValue={contactForm.content}
            action={changeContactValue}
        />
          <button className="form--validation__btn" type="submit">Valider et envoyer</button>
        </div>
      </div>
    </form>
  );
}

// == Export
export default FormValidation;
