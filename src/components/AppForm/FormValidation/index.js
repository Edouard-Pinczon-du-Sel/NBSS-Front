// == Import
import { useDispatch, useSelector } from 'react-redux';
import { changeContactValue } from '../../../actions/form';
import { fetchFormPost } from '../../../actions/formPost';
import TextArea from '../FormComponent/TextArea';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormValidation() {
  const contactRecap = useSelector((state) => state.form.recap.contact);
  const data = useSelector((state) => state.form.recap);
  const dispatch = useDispatch();
  const key = Object.keys(data);
  console.log('array of key =>', key);
  console.log('index 1 of key array =>', key[1]);
  const handler = (evt) => {
    evt.preventDefault();
    console.log('on à cliquer sur Valider & envoyer');
    console.log('les data qu\'on envoie sont => ', data);
    dispatch(fetchFormPost(data, key[1]));
  };
  return (
    <form action="" method="post">
      <div className="form--validation">
        <h1 className="form--validation__title">Validation</h1>
        <div className="form--validation__container--txtarea">
          <label className="form--validation__label" htmlFor="content">Quelques choses à nous spécifier en plus ? Des détails, inquiétudes, questions ? </label>
          <TextArea
            name="content"
            value={contactRecap.content}
            placeHolderValue="N'hésitez pas..."
            action={changeContactValue}
          />
          <button className="form--validation__btn" type="submit" onClick={handler}>Valider et envoyer</button>
        </div>
      </div>
    </form>
  );
}

// == Export
export default FormValidation;
