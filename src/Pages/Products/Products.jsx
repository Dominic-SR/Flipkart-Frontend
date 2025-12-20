import React from 'react'
import './Products.css'
import { ProductsData } from "../../ProductData"
import { Link } from 'react-router-dom'
import ProductDetailsCard from '../../Components/ProductDetailsCard/ProductDetailsCard'

const Products = () => {
  return (
    <div className='products'>
        <div className="products-filters">
          <p className="filter-head">Filters</p>
          
          <div className="category">
            <p className="filter-categoryhead">Category</p>
            <div className="filter-category">Mobiles</div>
          </div>    

          <div className='price'>
            <p className="pricehead">Price</p>
            <input type='range' name="" id="" className='pricerange' />
            <div className="price-input">
              <input value={0} className='pricebox'/> <p>0</p>
              <input value={5000} className='pricebox'/>
            </div>
          </div>

          <div className="brand">
            <p>Brand</p>
          </div>

        </div>

          <div>
          <div className="products-items">
            <p className="total-results">
              showing 1-{ProductsData.length} of {ProductsData.length} results
            </p>
            <div className="sortby">
              <p>Sort by</p>
              <ul className="sortitems">
                <li className="sortitem">Relevence</li>
                <li className="sortitem">Popularity</li>
                <li className="sortitem">Price - Low to High</li>
                <li className="sortitem">Price - High to Low</li>
                <li className="sortitem">Newest First</li>
              </ul>
            </div>
          </div>
         
            {ProductsData.map((item,index)=>(
              <Link key={index} to={`/productdetails/${item.id}`}>
                <ProductDetailsCard Data={item} />
              </Link>
            ))}
          </div>

    </div>
  )
}

export default Products