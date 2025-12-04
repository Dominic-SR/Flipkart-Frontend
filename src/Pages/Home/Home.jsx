import React from 'react';
import './Home.css';
import {CategoryBarData, CarouselData, BestOf } from "../../Datas";
import CategoryBar from '../../Components/CategoryBar/CategoryBar';
import Cart from "../Cart/Cart"

const Home = () => {
  return (
    <div className='Home'>
      <div className="Home-CategoryContainer">
        <div className="Home-CategoryBar">
        {CategoryBarData.map((item,index)=>(
          <CategoryBar
            key={index} // Always need a key when mapping!
              imageSrc={item.imageSrc}
              categoryName={item.category}
          />
         ))}
        </div>
      </div>
    </div>
  )
}

export default Home