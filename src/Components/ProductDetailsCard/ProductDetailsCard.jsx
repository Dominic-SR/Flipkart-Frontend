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
                <li className='productdetailcard-detail'>{Data.Descripition}</li>
                <li className='productdetailcard-detail'>{Data.Display}</li>
                <li className='productdetailcard-detail'>{Data.Camera}</li>
                <li className='productdetailcard-detail'>{Data.Proccessor}</li>
            </ul>
        </div>

        <div className='productdetailcard-priceanddelivery'>
            <div className="pricecontainer">
                <p className="pricedetailcard-price">₹ {Data.Sellingprice}</p>
                <img 
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                height={21}
                alt=''
                />
                <p className="freedel">Free Delivery</p>
                <p className="discount">Upto <b>17,500</b> off on Exchange No Cost EMI from 23,317/month</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsCard