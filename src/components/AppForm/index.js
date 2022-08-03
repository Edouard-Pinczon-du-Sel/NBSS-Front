import { useSelector } from 'react-redux';
import SelectService from './FormComponent/SelectService';
import FormContact from './FormContact';
import './styles.scss';
import './stylesMediaQueries.scss';

function AppForm() {
  const currentSelectService = useSelector((state) => state.form.serviceSelected);
  const formSelectService = useSelector((state) => state.form.servicesForm);
  const filterForm = formSelectService.find((obj) => obj.index === currentSelectService);
  const { formName } = { formName: filterForm.form };
  return (
    <form>
      <div className="form--infos">
        <h1 className="form--infos__title">Vos informations personnelles</h1>
        <div className="form--infos__container--input">
          <FormContact />
        </div>
        <h1 className="form--infos__title--choice">Cliquez sur le service de votre choix</h1>
        <SelectService />
        {currentSelectService !== '--Choix du service--' ? formName : <p className="form--infos__title--choice">veuillez choisir un service</p> }
        <p>Recapitulatif =&gt; Next step</p>
        <p>info suplémentaire =&gt; Next step</p>
        <p>submit =&gt; Last step</p>
      </div>
    </form>
  );
}

export default AppForm;
