import React from 'react';
import './Home.css';
import {CategoryBarData, CarouselData, BestOf } from "../../Datas";
import CategoryBar from '../../Components/CategoryBar/CategoryBar';
import Cart from "../Cart/Cart"
import BannerCarousel from '../../Components/BannerCarousal/BannerCarousel';
import ProductCarousel from '../../Components/ProductCarousal/ProductCarousel';

const Home = () => {
  return (
    <div className='home'>
      <div className="home-categorycontainer">
        <div className="home-categorybar">
        {CategoryBarData.map((item,index)=>(
          <CategoryBar
            key={index} // Always need a key when mapping!
              imageSrc={item.imageSrc}
              categoryName={item.category}
          />
         ))}
        </div>
      </div>
      <div className="home-container">
        <div className="home-carousal">
          <BannerCarousel data={CarouselData} />
        </div>
        <div className="product-carousal">
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Electronics"}
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Beauty,Food,Toys"}
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Winter Essentials"}
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Wedding & Gifting Specials"}
            Data={BestOf.Electronics}
          />
        </div>
      </div>
    </div>
  )
}

export default Home