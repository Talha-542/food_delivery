//FoodDisplay.jsx
import React, { useContext } from 'react'
import { StoreContext } from '../../store'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
export default function FoodDisplay(Category) {

    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes </h2>
            <div className='food-display-list'>
            {food_list.map((item,index)=>{
                return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} rating={item.rating} image={item.image} />
            })}

            </div>
        </div>
    )
}
 