/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  changePersonnalAssistanceCheck, changePersonnalAssistanceNumberHour, changePersonnalAssistanceOrganization, changePersonnalAssistanceUnCheck,
} from '../../../actions/form';
import Checkboxs from '../FormComponent/CheckBoxs';
import Input from '../FormComponent/Input';
import InputNumber from '../FormComponent/InputNumber';
import './styles.scss';
import './stylesMediaQueries.scss';
// TODO maper sur les checkbox depuis les donées de l'api du back
// == Composant
function FormPersonne() {
  function handleDisplayYes() {
    const Showed = 'form--personne__input selector';
  }

  function handleDisplayNo() {
    const hidden = 'form--personne__input selector display--none';
  }

  const personalAssistanceService = useSelector(
    (state) => state.form.miseEnPage.personalAssistanceService,
  );
  const personalAssistanceServiceRecap = useSelector(
    (state) => state.form.recap.personalAssistanceService,
  );

  return (
    <div className="form--personne">
      <h1 className="form--personne__title">Service aide à la personne</h1>
      <div className="form--personne__container--input">
        <h2 className="form--personne__subtitle">Besoins pour de l'aide :</h2>
        <div className="form--personne__container--checkbox--1">
          <div className="form--personne__container--four--label">

            {personalAssistanceService.personalAssistance.map((data) => (
              <div className="form--personne__container--label">
                <Checkboxs
                  key={uuidv4()}
                  name="personalAssistance"
                  data={data}
                  checkAction={changePersonnalAssistanceCheck}
                  unCheckAction={changePersonnalAssistanceUnCheck}
                />
              </div>
            ))}
          </div>
        </div>
        <h2 className="form--personne__subtitle">Moment d'intervention</h2>
        <div className="form--garde__container--checkbox">
          {personalAssistanceService.intervention.map((data) => (
            <Checkboxs
              key={uuidv4()}
              name="days"
              data={data}
              checkAction={changePersonnalAssistanceCheck}
              unCheckAction={changePersonnalAssistanceUnCheck}
            />
          ))}
        </div>
      </div>
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
      {/* <input className="form--personne__input display--none selector" type="number" placeholder="Par quel organisme ?" /> */}
      <Input
        key={uuidv4()}
        inputName="organization"
        action={changePersonnalAssistanceOrganization}
        placeHolderValue={personalAssistanceService.organization}
        value={personalAssistanceServiceRecap.organization}
        classNameValue="form--personne__input display--none selector"
      />
      <InputNumber
        key={uuidv4()}
        name="numberHour"
        value={personalAssistanceServiceRecap.numberHour}
        placeHolderValue={personalAssistanceService.numberHour}
        action={changePersonnalAssistanceNumberHour}
        classNameValue="form--personne__input display--none selector"

      />
      <Link to="/services/form/validation"><button className="form--menagers__btn" type="submit">Suivant</button></Link>
    </div>

  );
}

// == Export
export default FormPersonne;
