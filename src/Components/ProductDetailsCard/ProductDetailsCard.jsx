import React from 'react'
import "./ProductDetailsCard.css"

const ProductDetailsCard = ({Data}) => {
  return (
    <div className='productdetailcard'>
        <div className="productdetailcard-img">
            <img src={Data.url} alt='img'  />
        </div>
        <div className="productdetailcard-details">
            <p className="productdetailcard-name">{Data.Product}</p>
            <div className="ratingsandreviews">
                <div className="stars">{Data.rating} ⭐</div>
                <p className="ratings">
                    {Data.rating} Ratings & {Data.reviews} Reviews
                </p>
            </div>
            <ul className='productdetailcard-productdetails'>
                <li className='productdetailcard-detail'>{Data.Description}</li>
                <li className='productdetailcard-detail'>{Data.Display}</li>
                <li className='productdetailcard-detail'>{Data.Camara}</li>
                <li className='productdetailcard-detail'>{Data.Processor}</li>
            </ul>
        </div>
    </div>
  )
}

export default ProductDetailsCard