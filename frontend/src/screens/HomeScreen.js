import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions.js';

function HomeScreen (props)
{
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(listProducts());
    return () => {
    };

  }, [])

    return loading? <div>Loading...</div>:
    error? <div>{error}</div>:
    <ul className="products">
    {
      products.map(product => 
        <li key={product.id}>
        <div className="product">
          <Link to={'/product/' + product._id}>
            <img className="product-image" src={product.image} alt={product.name}></img>
          </Link>
          <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
          </div>
          <div className="product-desc-short">{product.shortDesc}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-seller">{product.seller}</div>
        </div>
      </li>)
    }</ul>
}

//<div className="product-seller-rating">{product.rating} Stars ({product.numReviews} reviews)</div> 
export default HomeScreen;
