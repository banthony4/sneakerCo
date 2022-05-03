import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function SneakerDetails({ addToCollection, addToWishlist, removeFromWishList }) {
  const [sneaker, setSneaker] = useState({})
  const { id } = useParams();
  const { image, title, releaseDate, retailPrice } = sneaker

  useEffect(() => {
    fetch(`http://localhost:4000/sneakers/${id}`)
    .then(r => r.json())
    .then(sneak => setSneaker(sneak))
  },[id])

  const handleBuyNow = () => {
    if(fetch(`http://localhost:4000/wishlist/${id}`)){
      fetch(`http://localhost:4000/wishlist/${id}`, {
        method: "DELETE"
      })
      .then(removeFromWishList(sneaker))
    }
    fetch('http://localhost:4000/collection',{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(sneaker)
        })
        .then(r => r.json())
        .then(newSneaker => addToCollection(newSneaker))
  }

  const handleWishlist = () => {
    fetch('http://localhost:4000/wishlist',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(sneaker)
    })
    .then(r => r.json())
    .then(newSneaker => addToWishlist(newSneaker))
  }
  
  
  return (
    <div className="SneakerDetails">
      <h1>Sneaker Details:</h1>
      <h3>Name: {title}</h3>
      <img id="details-img" src={image} alt={title}></img>
      <p>Release Date: {releaseDate}</p>
      <p>Price: ${retailPrice}</p>
      <p>Gender: {sneaker.gender}</p>
      <br></br>
      <Link to="/sneakercollection">
        <button onClick={handleBuyNow}>Buy Now</button>
      </Link>
      <Link to='/wishlist' >
        <button onClick={handleWishlist} >Add to Wishlist</button>
      </Link>
    </div>
  );
}

export default SneakerDetails;