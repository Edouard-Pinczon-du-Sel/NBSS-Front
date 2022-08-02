/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import { actionNewDateFor, changeAdministrativeDepartment } from '../../../actions/form';
import Input from '../FormComponent/Input';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormAdmin() {
  const value = useSelector((state) => state.form.recap.administrativeDepartment);
  const adminPatern = useSelector((state) => state.form.miseEnPage.administrativeDepartment);
  const recap = useSelector((state) => state.form.recap);
  const currentDate = useSelector((state) => state.form.recap.contact.createdAt);
  const dispatch = useDispatch();

  const dateOfBirth = (e) => {
    // toISOSTring permet de convertir notre event avec le bon format et substring permet de limiter l'affichafge des 10 premiers caractères
    dispatch(actionNewDateFor('dateOfBirth', e.toISOString().substring(0, 10)));

    // console.log('event avec Date.parse(e) => ', e.toISOString().substring(0, 10));
    console.log(e);
    const test = document.querySelector('.form--admin__date');
    console.log(test.name);
  };

  const dateOfDeceased = (e) => {
    dispatch(actionNewDateFor('dateOfDeceased', e.toISOString().substring(0, 10)));
  };

  return (
    <div className="form--admin">
      <h1 className="form--admin__title">Renseignements sur la personne décédée</h1>
      <div className="form--admin__container--input">
        {
          Object.keys(adminPatern.aboutDeceasedPerson).map((element, index) => (
            adminPatern.aboutDeceasedPerson[element] !== adminPatern.aboutDeceasedPerson.dateOfBirth
              && adminPatern.aboutDeceasedPerson[element] !== adminPatern.aboutDeceasedPerson.dateOfDeceased
              ? (
                <Input
                  key={element + index}
                  inputName={element}
                  action={changeAdministrativeDepartment}
                  placeHolderValue={adminPatern.aboutDeceasedPerson[element]}
                  value={value[element]}
                  classNameValue="form--infos__input"
                />
              )
              : (
                <DatePicker
                  key={element + index}
                  selected={Date.parse(value[element])}
                  closeOnScroll={(e) => e.target === document}
                  dateFormat="yyyy/MM/dd"
                  value={Date.parse(value[element])}
                  onChange={element === 'dateOfDeceased' ? dateOfDeceased : dateOfBirth}
                  name={element}
                  className="form--admin__date"
                  placeholderText="Veuillez insérer une date"
                />
              )
          ))
        }
      </div>
      <h1 className="form--admin__title">Coordonnées de la personne en charge du décès</h1>
      <div className="form--admin__container--input">
        {
          Object.keys(adminPatern.contactInCharge).map(
            (element, index) => (
              <Input
                key={element + index}
                inputName={element}
                action={changeAdministrativeDepartment}
                placeHolderValue={adminPatern.contactInCharge[element]}
                value={value[element]}
                classNameValue="form--infos__input"
              />
            ),
          )
        }
      </div>
      <Link to="/services/form/validation"><button className="form--menagers__btn" type="submit">Suivant</button></Link>
    </div>

  );
}

// == Export
export default FormAdmin;
