import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function ProductScreen (props) {
    console.log(props.match.params.id)
    const product = data.products.find(x => x._id == props.match.params.id);
    return <div>
      <div className="back-button">
        <Link to="/">Back</Link>
      </div>

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
              Seller rating: {product.rating} starts ({product.numReviews} reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>
                {product.longDesc}
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
              Status: {product.status}
            </li>
            <li>
              <button className="button primary">Add to cart</button>
            </li>
          </ul>
        </div>

      </div>

    </div>
}

export default ProductScreen;
