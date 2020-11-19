import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import ProductsScreen from './screens/ProductsScreen';

function App() 
{

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

    const openMenu = () =>{
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }
 
  return (
    <BrowserRouter>
      <div className="grid-container">

        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">Sell yo stuff!</Link>
          </div>
          <div className="header-links">
            <a href="cart/cart.html">Cart</a>
            {userInfo ? (
              <Link to="/products">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
  
          </div>
        </header>

        <aside className="sidebar">
          <h3>Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Electronics</a>
            </li>
            <li>
              <a href="index.html">Books</a>
            </li>
            <li>
              <a href="index.html">Clothes</a>
            </li>
            <li>
              <a href="index.html">Misc</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
          <Route path="/products" component={ProductsScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>

        <footer className="footer">
          All rights reserved.
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
