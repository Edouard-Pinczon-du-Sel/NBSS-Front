/* eslint-disable max-len */
// == Import
// import PropTypesLib from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Input from '../FormComponent/Input';
import { changeContactValue, changeContactCreatedAt } from '../../../actions/form';
import './styles.scss';
import './stylesMediaQueries.scss';

// == Composant
function FormContact() {
  const value = useSelector((state) => state.form.recap.contact);
  const contactForm = useSelector((state) => state.form.miseEnPage.contact);
  const current = new Date();
  const date = `${current.getFullYear()}-${(`0${current.getMonth() + 1}`).slice(-2)}-${(`0${current.getDate()}`).slice(-2)}`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeContactCreatedAt('createdAt', date));
    window.scrollTo(0, 0);
  }, []);
  return Object.keys(contactForm).map(
    (element, index) => (
      <Input
        key={element + index}
        inputName={element}
        action={changeContactValue}
        placeHolderValue={contactForm[element]}
        value={value[element]}
        classNameValue="form--infos__input"
      />
    ),
  );
}

// == Export
export default FormContact;
