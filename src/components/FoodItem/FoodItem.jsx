import  { useState } from 'react';
import './FoodItem.css';
import add_icon_green from '../../assets/add_icon_green.png'; // Correct path

const FoodItem = ({  name, description, price, image,rating }) => {
  const handleButtonClick = () => {
    console.log('Add to cart is Clicked');
  };
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt="" />
        {
          !itemCount
            ? <img 
                className='add' 
                onClick={() => setItemCount(prev => prev + 1)} 
                src={add_icon_green} //1:25
                alt="Add Icon"
              />
            : <div className='food-item-counter'>{itemCount}</div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className='item_rating'>Ratings: {rating}/5</p>
        <p className="food-item-price">${price}</p>
        <button className='add_to_cart' onClick={handleButtonClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodItem;
