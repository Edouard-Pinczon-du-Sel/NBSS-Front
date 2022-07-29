/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from './Input';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormInfos() {
  const value = useSelector((state) => state.form.contact);
  return (
    <form>
      {
        // ANCHOR Permet de map les clé d'un object tout en ayant son numéro d'index /
        Object.keys(value).map((KeyObject, Placement) => console.log('KeyObject : ', KeyObject, 'Placement : ', Placement))
      }
      <div className="form--infos">
        <h1 className="form--infos__title">Vos informations personnelles</h1>
        <div className="form--infos__container--input">
          {
            Object.keys(value).map((index, key) => <Input key={key} inputName={index} />)
          }

          {/* <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder="Nom" />
          <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder="Nom d'avant mariage (facultatif)" />
          <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder="Prénom" />
          <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder="Adresse" />
          <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder="Code postal" />
          <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder="Ville" />
          <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder="Téléphone" />
          <input className="form--infos__input" type="text" value={value} name={inputName} onChange={handleChange} placeholder="E-mail" /> */}
        </div>
        {/* <select className="form--infos__select">
          <option className="form--infos__otpion">Choix du service</option>
          <option className="form--infos__otpion">Service ménagers</option>
          <option className="form--infos__otpion">Service 2</option>
          <option className="form--infos__otpion">Service 3</option>
          <option className="form--infos__otpion">Service 4</option>
        </select> */}
        <h1 className="form--infos__title--choice">Cliquez sur le service de votre choix</h1>
        <div className="form--infos__container--choice--btn">
          <Link to="/services/form/menagers"><button className="form--infos__choice--btn" type="button">Service ménagers</button></Link>
          <Link to="/services/form/garde"><button className="form--infos__choice--btn" type="button">Service garde enfants</button></Link>
          <Link to="/services/form/personne"><button className="form--infos__choice--btn" type="button">Service aide à la personne</button></Link>
          <Link to="/services/form/admin"><button className="form--infos__choice--btn" type="submit">Service aide administratif</button></Link>
        </div>
      </div>
    </form>
  );
}

// == Export
export default FormInfos;
