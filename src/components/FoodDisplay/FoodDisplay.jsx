import React, { useContext } from 'react'
import { StoreContext } from '../../store'
import './FoodDisplay.css'
export default function FoodDisplay(Category) {

    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes </h2>
            <div className='food-display-list'>
            {food_list.map((item,index)=>{
                return
            })}

            </div>
        </div>
    )
}
