/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Input from './Input';
import SelectService from './SelectService';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormInfos() {
  const contactForm = useSelector((state) => state.form.contact);
  // console.log(Object.keys(serviceList));
  return (
    <form>
      {
        // ANCHOR Permet de map les clé d'un object tout en ayant son numéro d'index /
        // Object.keys(value).map((KeyObject, Placement) => console.log('KeyObject : ', KeyObject, 'Placement : ', Placement))
      }
      <div className="form--infos">
        <h1 className="form--infos__title">Vos informations personnelles</h1>
        <div className="form--infos__container--input">
          {
            Object.keys(contactForm).map((index, key) => <Input key={key} inputName={index} />)
          }
        </div>
        <h1 className="form--infos__title--choice">Cliquez sur le service de votre choix</h1>
        <SelectService />
        {/* <div className="form--infos__container--choice--btn">
          <Link to="/services/form/menagers"><button className="form--infos__choice--btn" type="button">Service ménagers</button></Link>
          <Link to="/services/form/garde"><button className="form--infos__choice--btn" type="button">Service garde enfants</button></Link>
          <Link to="/services/form/personne"><button className="form--infos__choice--btn" type="button">Service aide à la personne</button></Link>
          <Link to="/services/form/admin"><button className="form--infos__choice--btn" type="submit">Service aide administratif</button></Link>
        </div> */}
      </div>
    </form>
  );
}

// == Export
export default FormInfos;
