import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {detailsProduct} from '../actions/productActions';

function ProductScreen (props) {
    const productDetails = useSelector((state) => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            // do nothing
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/"+props.match.params.id);
    }

    return <div>
      <div className="back-button">
        <Link to="/">Back</Link>
      </div>
      {loading? <div>Loading...</div>:
      error? <div>{error}</div>:
        (
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>

            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  Seller: {product.seller}
                </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>
                    {product.shortDesc}
                  </div>
                </li>
              </ul>
            </div>

            <div className="details-action">
              <ul>
                <li>
                  Price: ${product.price}
                </li>
                <li>
                  <button onClick={handleAddToCart} className="button primary">Add to cart</button>
                </li>
              </ul>
            </div>

          </div>
        )
    }
    </div>
}

export default ProductScreen;
