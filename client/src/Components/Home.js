import Sneaker from "./Sneaker"
import Slider from './carousel/Slider'


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
      <Slider />
      <br></br>
      <br></br>
      <h2>Most Popular:</h2>
      <div>
        {renderMostPopular()}
      </div>
    </div>
  );
}

export default Home;