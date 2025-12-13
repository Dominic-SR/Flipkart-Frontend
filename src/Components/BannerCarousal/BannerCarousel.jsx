import React from 'react'
import "./BannerCarousel.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = ({data}) => {
    const settings={
        dots:false,
        infinity:true,
        speed:1000,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:3000
    }
  return (
    <div className='banner-carousal'>
      <Slider {...settings}>
        {data.map((item)=>(
          <div key={item.id}>
            <img src={item.Imgsrc} alt="img" className='bannercarousal-image' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BannerCarousel