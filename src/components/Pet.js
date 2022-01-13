import { Link } from 'react-router-dom';

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }

  return (
    <div className='pet-container'>
      <Link to={`/details/${id}`}>
        <div>
          <img src={hero} alt={name} />
        </div>
        <div className='info'>
          <h2>{name}</h2>
          <h3>{`${animal} - ${breed} - ${location}`}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Pet;
