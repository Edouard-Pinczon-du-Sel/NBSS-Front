/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeAdministrativeDepartment } from '../../../actions/form';
import Input from '../FormComponent/Input';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormAdmin() {
  const value = useSelector((state) => state.form.recap.administrativeDepartment);
  const adminPatern = useSelector((state) => state.form.miseEnPage.administrativeDepartment);
  return (
    <div className="form--admin">
      <h1 className="form--admin__title">Renseignements sur la personne décédée</h1>
      <div className="form--admin__container--input">
        {
          Object.keys(adminPatern.aboutDeceasedPerson).map((element, index) => (
            <Input
              key={element + index}
              inputName={element}
              action={changeAdministrativeDepartment}
              placeHolderValue={adminPatern.aboutDeceasedPerson[element]}
              value={value[element]}
              classNameValue="form--infos__input"
            />
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
