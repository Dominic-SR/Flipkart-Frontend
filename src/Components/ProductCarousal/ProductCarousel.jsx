import React from 'react'
import { Link } from 'react-router-dom';
import "./ProductCarousel.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryBanner from '../CategoryBanner/CategoryBanner';

const ProductCarousel = ({BgImg,Title,Data}) => {
    const settings={
        dots:false,
        speed:500,
        slidesToShow: 4,
        Infinity:false,
    }
return (
    <div className='category-carousal'>
        <div 
        className="categorycarousal-left"
        style={{background: `url(${BgImg}) no-repeat 0px bottom`}}
        >
            <p className='categorycarousal-title'>{Title}</p>
            <button className='categorycarousal-btn'>View All</button>
        </div>

        <div className="categorycarousal-right">
            <Slider {...settings}>
                {Data.map((item,index)=>(
                    <Link key={index} to={"/products"}>
                        <CategoryBanner
                            ImgSrc={item.ImgSrc}
                            Title={item.CategoryName}
                            Brand={item.Brand}
                        />
                    </Link>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default ProductCarousel