import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

function CartScreen(props) {
    
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const productId = props.match.params.id;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }
    useEffect(() => {
        if (productId)
            dispatch(addToCart(productId));
    }, []);
    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }
    return <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {
            cartItems.length === 0?
              <div>
                Cart is empty
              </div>
            :
            cartItems.map(item => 
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                  <div className="cart-name">
                    <div>
                      <Link to={"/product/" + item.product}>
                        {item.name}
                      </Link>
                    </div>
                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>
                      Remove from cart
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  ${item.price}
                </div>
              </li>
            )
          }
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ({cartItems.reduce((a) => a + 1, 0)} items)
          :
          ${cartItems.reduce((a,c) => a + c.price, 0)}
        </h3>
        <button className="button primary full-width" onClick={checkoutHandler} disable={cartItems.length === 0}>
          Proceed to checkout
        </button>
      </div>
    </div>
}

export default CartScreen;
