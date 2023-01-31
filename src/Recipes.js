import React from 'react'

const Recipes = ({ title, calories, image, country }) => {
    return (
        <div className="food-box">
            <img src={image} />
            <p className='title'>{title}</p>
            <p className='cal-num'> {calories} <span className='calore'>calories</span></p>
            <p className='country'>{country}</p>
        </div>
    )
}

export default Recipes