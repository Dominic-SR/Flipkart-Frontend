import React from 'react'
import './CategoryBar.css'
const CategoryBar = ({imageSrc, categoryName}) => {
  return (
    <div className='category-bar'>
        <div className="categorybar-img">
            <img src={imageSrc} alt="categoryimg" />
        </div>
        <p className='categorybar-name'>{categoryName}</p>
    </div>
  )
}

export default CategoryBar