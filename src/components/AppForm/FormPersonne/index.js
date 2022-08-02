/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  changePersonnalAssistanceCheck, changePersonnalAssistanceFinancialHelp, changePersonnalAssistanceNumberHour, changePersonnalAssistanceOrganization, changePersonnalAssistanceTexteArea, changePersonnalAssistanceUnCheck,
} from '../../../actions/form';
import Checkboxs from '../FormComponent/CheckBoxs';
import Input from '../FormComponent/Input';
import InputNumber from '../FormComponent/InputNumber';
import './styles.scss';
import './stylesMediaQueries.scss';
import Radio from '../FormComponent/Radio';
import TextArea from '../FormComponent/TextArea';
// TODO maper sur les checkbox depuis les donées de l'api du back
// == Composant
function FormPersonne() {
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
                  key={`personalAssistance${data}`}
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
              key={`intervention${data}`}
              name="intervention"
              data={data}
              checkAction={changePersonnalAssistanceCheck}
              unCheckAction={changePersonnalAssistanceUnCheck}
            />
          ))}
        </div>
        <h2 className="form--garde__subtitle">Information complémentaire</h2>
        <TextArea
          name="content"
          value={personalAssistanceServiceRecap.content}
          placeHolderValue={personalAssistanceService.content}
          action={changePersonnalAssistanceTexteArea}
        />
      </div>
      <h2 className="form--personne__subtitle">Bénéficiez-vous d'une aide financière</h2>
      <Radio action={changePersonnalAssistanceFinancialHelp} />
      {/* <input className="form--personne__input display--none selector" type="number" placeholder="Par quel organisme ?" /> */}
      {
        personalAssistanceServiceRecap.financialHelp
          ? (
            <>
              <Input
                key="organizationInput"
                inputName="organization"
                action={changePersonnalAssistanceOrganization}
                placeHolderValue={personalAssistanceService.organization}
                value={personalAssistanceServiceRecap.organization}
                classNameValue="form--personne__input selector"
              />
              <InputNumber
                key="organizationInputNumber"
                name="numberHour"
                value={personalAssistanceServiceRecap.numberHour}
                placeHolderValue={personalAssistanceService.numberHour}
                action={changePersonnalAssistanceNumberHour}
                classNameValue="form--personne__input selector"
              />
            </>
          )
          : ''
}

      <Link to="/services/form/validation"><button className="form--menagers__btn" type="submit">Suivant</button></Link>
    </div>

  );
}

// == Export
export default FormPersonne;
