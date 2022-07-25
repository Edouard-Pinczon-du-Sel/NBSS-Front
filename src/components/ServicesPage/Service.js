// == Import
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import img from '../../assets/images/7.jpg';

// == Composant
function Service() {
  return (
    <>
      <div className="services--page__service">
        <div className="services--page__service--container">
          <img className="services--page__service--img" src={img} />
          <div className="services--page__service--container--content">
            <h1 className="services--page__service--title">Services 1</h1>
            <div className="services--page__services--container--txt">
              <p className="services--page__service--txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
            <Link to="/test"><button className="services--page__service--btn" type="button">Lire la suite</button></Link>
          </div>
        </div>
      </div>

      <div className="services--page__service">
        <div className="services--page__service--container">
          <img className="services--page__service--img" src={img} />
          <div className="services--page__service--container--content">
            <h1 className="services--page__service--title">Services 1</h1>
            <div className="services--page__services--container--txt">
              <p className="services--page__service--txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
            <Link to="/test"><button className="services--page__service--btn" type="button">Lire la suite</button></Link>
          </div>
        </div>
      </div>

     
    </>
  );
}

// == Export
export default Service;
