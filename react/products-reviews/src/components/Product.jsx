import { useState } from "react";
const Product = (props) => {
  const { title, price, img, rating } = props;
  const [showRating, setShowRating] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowRating(!showRating);
  };
  return (
    <div className="product">
      <div className="product-info">
        <img className="product-img" src={img} alt="product img" />

        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <p className="product-subtitle">{price}</p>
        </div>
      </div>
      <div className="product-reviews">
        <button className="product-button" onClick={handleClick}>
          Check Rating
        </button>

        {showRating &&
          rating &&
          rating.map((review) => {
            return (
              <div className="product-review">
                <div className="product-review-author">{review.name}</div>
                <div className="product-review-rating">{review.rating}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
