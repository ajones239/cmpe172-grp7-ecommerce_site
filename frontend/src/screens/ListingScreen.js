import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct } from '../actions/productActions';


function ListingScreen(props) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [numReview, setNumReview] = useState('');
  const listingSave = useSelector(state => state.listingSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = listingSave;
  const dispatch = useDispatch();
  useEffect(() => {
  
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct(name, price, image, brand, category, countInStock, description, rating, numReview));

  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create a New Product Listing</h2>
        </li>
        <li>
          {loadingSave && <div>Loading...</div>}
          {errorSave && <div>{errorSave}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="price">
            Price
          </label>
          <input type="text" id="price" name="price" onChange={(e) => setPrice(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="image">
            Image
          </label>
          <input type="text" id="image" name="image" onChange={(e) => setPrice(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="brand">
            Brand
          </label>
          <input type="text" id="brand" name="brand" onChange={(e) => setBrand(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="category">
            Category
          </label>
          <input type="text" id="category" name="category" onChange={(e) => setCategory(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="countInStock">
            # In Stock
          </label>
          <input type="text" id="countInStock" name="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="Description">
            Description
          </label>
          <textarea id="description" name="description" onChange={(e) => setDescription(e.target.value)}>
          </textarea>
        </li>
        <li>
          <label htmlFor="rating">
            Start Rating
          </label>
          <input type="text" id="rating" name="rating" onChange={(e) => setRating(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="numReview">
            Fake Review #
          </label>
          <input type="text" id="numReview" name="numReview" onChange={(e) => setNumReview(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Create Listing</button>
        </li>
        <li>
          New to SellyoStuff?
        </li>
        <li>
          <Link to="/register" className="button secondary text-center" >Create new account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default ListingScreen;