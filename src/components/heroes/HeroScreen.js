import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';
// import batman from '../../assets/heroes/dc-batman.jpg'; // importacion para imagenes estaticas

// const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({ history }) => {

  const { heroId } = useParams(); // get url params
  
  const hero = useMemo(() => getHeroById(heroId), [heroId])
  
  if(!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if(history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          // src={`../assets/heroes/${heroId}.jpg`} // desde public/assets
          // src={ batman } // import imagenes estaticas
          src={ heroImages(`./${ id }.jpg`).default }
          alt={ superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter Ego: </b>{ alter_ego }</li>
          <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
          <li className="list-group-item"><b>First Apperance: </b>{ first_appearance }</li>
        </ul>
        <h5>Characters</h5>
        <p>{ characters }</p>
        <button 
          className="btn btn-outline-primary"
          onClick={ handleReturn }
        >
          Return
        </button>
      </div>
    </div>
  )
}
