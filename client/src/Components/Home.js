import Sneaker from "./Sneaker"
import {Link} from 'react-router-dom'

function Home({mostPopular}) {
  const renderMostPopular = () => {
    return mostPopular.map(sneak => {
      return <Sneaker key={sneak.id} sneaker={sneak} />
    })
  }

  return (
    <div className="Home">
      <br></br>
      <br></br>
      <br></br>
      <h2>Most Popular:</h2>
      <div>
        {renderMostPopular()}
      </div>
      <Link to="/sneakers">
        <button className='HomeButton'>Shop Now!</button>
      </Link>
    </div>
  );
}

export default Home;