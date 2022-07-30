/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InputFinalVersion from '../FormComponent/InputFinalVersion';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormAdmin() {
  const adminForm = useSelector((state) => state.form.serviceList.administrativeDepartment[0]);
  const adminFuncForm = useSelector((state) => state.form.serviceList.administrativeDepartment[2]);
  console.log(adminFuncForm[0].func);
  console.log(adminFuncForm[1].func);
  
  return (
    <form>
      <div className="form--admin">
        <h1 className="form--admin__title">Renseignements sur la personne décédée</h1>
        <div className="form--admin__container--input">
          {
            adminForm.map((item) => <InputFinalVersion key={item.id} inputName={item} func={adminFuncForm[0].func} />)
          }
          {/* <input className="form--admin__input" type="text" placeholder="Nom" />
          <input className="form--admin__input" type="text" placeholder="Nom de jeune fille" />
          <input className="form--admin__input" type="text" placeholder="Prénom" />
          <input className="form--admin__input" type="text" placeholder="Adresse" />
          <input className="form--admin__input" type="text" placeholder="Date et lieu de naissance" />
          <input className="form--admin__input" type="text" placeholder="Date et lieu de décès" /> */}
        </div>

        <h1 className="form--admin__title">Coordonnées de la personne en charge du décès</h1>
        <div className="form--admin__container--input">
          <input className="form--admin__input" type="text" placeholder="Nom" />
          <input className="form--admin__input" type="text" placeholder="Prénom" />
          <input className="form--admin__input" type="text" placeholder="Adresse" />
        </div>
        <Link to="/services/form/validation"><button className="form--menagers__btn" type="submit">Suivant</button></Link>
      </div>
    </form>
  );
}

// == Export
export default FormAdmin;
