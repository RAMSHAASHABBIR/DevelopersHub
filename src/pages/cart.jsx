import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo-symbol.png';
import brand from '../assets/Brand.png';
import profileIcon from '../assets/Profile.png';
import ordersIcon from '../assets/Orders.png';
import msgIcon from '../assets/Message.png';
import cartIcon from '../assets/Cart.png';
import jacket from '../assets/jacket.png';
import shorts from '../assets/shorts.png';
import wallet from '../assets/wallet.png';
import bag from '../assets/bag.png';
import payment1 from '../assets/payment1.png';
import payment2 from '../assets/payment2.png';
import payment3 from '../assets/payment3.png';
import payment4 from '../assets/payment4.png';
import payment5 from '../assets/payment5.png';
import btn1 from '../assets/btn1.png';
import btn2 from '../assets/btn2.png';
import btn3 from '../assets/btn3.png';
import logoimg from '../assets/logo-colored.png';
import flagPAK from '../assets/PAK.png';
import flagTURKEY from '../assets/TURKEY.png';
import flagKOREA from '../assets/KOREA.png';
import flagUSD from '../assets/USD.png';
import flagNEWZEALAND from '../assets/Flag_of_New_Zealand.svg.png';
import flagCHINA from '../assets/CHINA.png';
import appicon1 from '../assets/facebook3.png';
import appicon2 from '../assets/twitter3.png';
import appicon3 from '../assets/instagram3.png';
import appicon4 from '../assets/linkedin3.png';
import appicon5 from '../assets/youtube3.png';
import AppImg1 from '../assets/market-button.png';
import AppImg2 from '../assets/Group.png';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [shipTo, setShipTo] = useState({ name: 'USA', flag: '' });

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (err) {
      console.error('Error loading cart', err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart();
    } catch (err) {
      console.error('Error removing item:', err.message);
    }
  };

  return (
    <div className="bg-dark text-light min-vh-100">
      {/* Header */}
      <div className="container-fluid bg-secondary py-2 px-3 border-bottom border-dark">
        <div className="row align-items-center justify-content-between gx-2">
          <div className="col-auto d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: '40px' }} className="me-2" />
            {/* <img src={brand} alt="LEVEL UP" style={{ height: '40px' }} /> */}
          </div>
          <div className="col-auto d-flex align-items-center">
            <HeaderIcon img={profileIcon} onClick={() => console.log('Go to Profile')} />
            <HeaderIcon img={ordersIcon} onClick={() => console.log('Go to Orders')} />
            <HeaderIcon img={msgIcon} onClick={() => console.log('Go to Messages')} />
            <HeaderIcon img={cartIcon} onClick={() => (window.location.href = '/cart')} />
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mt-4">
        <h2 className="mb-4 text-info">Your Cart</h2>
        <div className="row g-4">
          {/* Products */}
          <div className="col-lg-8">
            <div className="bg-secondary p-4 rounded shadow-sm text-light">
              <h4>Your Items</h4>
              {!cart ? (
                <p>Loading cart...</p>
              ) : cart.items.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cart.items.map((item) => (
                  <div key={item.productId._id} className="d-flex border-bottom border-dark py-3">
                    <img
                      src={`http://localhost:5000/${item.productId.image}`}
                      alt={item.productId.name}
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      className="me-3 rounded"
                    />
                    <div className="flex-grow-1">
                      <h5>{item.productId.name}</h5>
                      <p className="mb-1 small">{item.productId.description}</p>
                      <strong className="me-3 text-info">${item.productId.price}</strong>
                      <p>Qty: {item.quantity}</p>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeItem(item.productId._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="col-lg-4">
            <div className="bg-secondary p-3 mb-3 rounded shadow-sm">
              <h6>Have a coupon?</h6>
              <div className="input-group mt-2">
                <input type="text" className="form-control bg-dark text-light border-0" placeholder="Enter coupon code" />
                <button className="btn btn-info">Apply</button>
              </div>
            </div>

            <div className="bg-secondary p-3 rounded shadow-sm mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>$149.97</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Discount</span>
                <span>-$10.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax</span>
                <span>$5.00</span>
              </div>
              <hr className="border-dark" />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>$144.97</span>
              </div>
              <button className="btn btn-info w-100">Checkout</button>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              {[payment1, payment2, payment3, payment4, payment5].map((img, idx) => (
                <img key={idx} src={img} alt={`payment-${idx}`} style={{ width: '40px', height: '26px', objectFit: 'contain' }} />
              ))}
            </div>
          </div>
        </div>

        {/* Saved for Later */}
        <div className="bg-secondary border border-dark rounded shadow p-4 mb-4">
          <h5 className="fw-bold mb-4 text-info">Saved for Later</h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              { src: wallet, label: 'Wallet', price: '$6.50' },
              { src: bag, label: 'Denim Shorts', price: '$19.75' },
              { src: shorts, label: 'Coat', price: '$42.90' },
              { src: jacket, label: 'Winter Jacket', price: '$18.99' },
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-dark border border-dark rounded p-3" style={{ width: '160px' }}>
                <img src={item.src} alt={item.label} className="mb-2 rounded" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                <div className="fw-bold text-light">{item.price}</div>
                <div className="text-muted mb-2 small">{item.label}</div>
                <button className="btn btn-sm btn-outline-info">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        {/* Offer Banner */}
        <div className="d-flex justify-content-between align-items-center px-4 py-3 rounded bg-info text-dark mb-5">
          <div className="fw-bold">Get more discount than 100 USD</div>
          <button className="btn btn-dark fw-semibold px-3">Shop Now</button>
        </div>

        {/* Footer */}
        <div className="bg-secondary border-top border-dark pt-5 pb-4 mt-5">
          <div className="container">
            <div className="row text-light">
              <div className="col-md-3 mb-4 text-center text-md-start">
                <img src={logoimg} alt="Brand Logo" className="mb-3" style={{ width: '120px' }} />
                <p className="text-muted mb-4">CONTACT US</p>
                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                  {[appicon1, appicon2, appicon3, appicon4, appicon5].map((icon, i) => (
                    <button key={i} className="btn btn-outline-info p-2 rounded-circle border-0">
                      <img src={icon} alt={`Icon ${i + 1}`} style={{ width: '25px', height: '25px' }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="col-md-2 mb-3">
                <h6 className="fw-bold text-info">About</h6>
                <div className="d-flex flex-column">
                  {['About Us', 'Find Store', 'Categories', 'Blogs'].map((link, i) => (
                    <button key={i} className="btn btn-link text-start text-light p-0 mb-1">{link}</button>
                  ))}
                </div>
              </div>

              <div className="col-md-2 mb-3">
                <h6 className="fw-bold text-info">Information</h6>
                <div className="d-flex flex-column">
                  {['Help Centre', 'Money Refund', 'Shipping', 'Contact Us'].map((link, i) => (
                    <button key={i} className="btn btn-link text-start text-light p-0 mb-1">{link}</button>
                  ))}
                </div>
              </div>

              <div className="col-md-2 mb-3">
                <h6 className="fw-bold text-info">For Users</h6>
                <div className="d-flex flex-column">
                  {['Login', 'Register', 'Settings', 'My Orders'].map((link, i) => (
                    <button key={i} className="btn btn-link text-start text-light p-0 mb-1">{link}</button>
                  ))}
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <h6 className="fw-bold text-info">Get App</h6>
                <div className="d-flex flex-column gap-2">
                  <a href="https://apps.apple.com/app-id" target="_blank" rel="noopener noreferrer">
                    <img src={AppImg1} alt="App Store" style={{ width: '140px' }} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer">
                    <img src={AppImg2} alt="Google Play" style={{ width: '140px' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Grey Footer */}
        <div style={{ backgroundColor: '#222' }} className="py-2 border-top border-dark">
          <div className="container d-flex justify-content-between align-items-center text-light small">
            <span>©2023 Ecommerce</span>
            {/* Language Dropdown (can style similarly if you’d like) */}
            <span>{shipTo.name}</span>
          </div>
        </div>
      </div>
    </div>
  );

  function HeaderIcon({ img, onClick }) {
    return (
      <button className="d-flex flex-column align-items-center mx-3 border-0 bg-transparent" onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={img} alt="Icon" style={{ height: '36px', width: '36px', marginBottom: '4px' }} />
      </button>
    );
  }
}
