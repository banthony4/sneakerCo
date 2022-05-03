import { Link } from 'react-router-dom'


function Sneaker({ sneaker }) {
  const {id, brand, image, name, year, shoe} = sneaker

  return (
    image ? 
      <li className="Sneaker">
        <section className='details'>
          <p id='year'>{year}</p>
          <p id='brand'>{brand}</p>
        </section>
        <h3>{name}</h3>
        <p style={{margin:'-20px'}}>{shoe}</p>
        <figure>
          <Link to={`/sneakers/${id}/details`}>
            <img src={image} alt={name}></img>
          </Link>
        </figure>
      </li>
      : null
  );
}

export default Sneaker;
