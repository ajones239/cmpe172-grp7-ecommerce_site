import logo from './logo.svg';
import './App.css';

function App() {
    const openMenu = () =>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }
 

  return (
  <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">Sell yo stuff!</a>
      </div>
      <div className="header-links">
        <a href="signin">Sign In</a>
        <a href="cart.html">Cart</a>
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
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/canon_printer.png" alt="Canon printer"></img>
              <div className="product-name">
                <a href="product.html">Canon Printer</a>
              </div>
              <div className="product-desc-short">A great printer</div>
              <div className="product-price">$100</div>
              <div className="product-seller">Seller Account</div>
              <div className="product-seller-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer className="footer">
      All rights reserved.
    </footer>
  </div>
  );
}

export default App;
