import Sneaker from "./Sneaker";

function WishList({ wishlist }) {

  const renderWishlist = () => {
    return wishlist.map(sneak => {
      return <Sneaker key={sneak.id} sneaker={sneak} />
    })
  }

  return (
    <div className="WishList">
      <h2>Your Wishlist:</h2>
      <ul>
        {renderWishlist()}
      </ul>
    </div>
  );
}

export default WishList;
