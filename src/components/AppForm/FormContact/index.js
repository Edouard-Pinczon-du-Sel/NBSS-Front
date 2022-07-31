/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import Input from '../FormComponent/Input';
import { changeContactValue } from '../../../actions/form';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormContact() {
  const value = useSelector((state) => state.form.recap.contact);
  const contactForm = useSelector((state) => state.form.miseEnPage.contact);
  return Object.keys(contactForm).map((element, index) => <Input key={element + index} inputName={element} action={changeContactValue} placeHolderValue={contactForm[element]} value={value[element]} />);
}

// == Export
export default FormContact;
