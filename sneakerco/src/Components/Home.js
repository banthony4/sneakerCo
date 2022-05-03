import VideoPlayBack from "./videoplayback.mp4"
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
      <video 
      className="video"
      autoPlay
      loop 
      muted
      style={{
        position: "absolute",
        width:"100%",
        // left: "50%" ,
        top:"80%" ,
        right:'0%',
        height:"100%",
        // objectFit:"cover",
        // transform: "translate(-50%,-50%)",
        // zIdex:'-1',
      }}>
        <source src={VideoPlayBack} type="video/mp4">

        </source>
      </video>
      <Link to="/sneakers">
        <button className='HomeButton'>Shop Now!</button>
      </Link>
    </div>
  );
}

export default Home;