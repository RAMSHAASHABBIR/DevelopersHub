import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo-symbol.png';
import brand from '../assets/Brand.png';
import profileIcon from '../assets/Profile.png';
import ordersIcon from '../assets/Orders.png';
import msgIcon from '../assets/Message.png';
import cartIcon from '../assets/Cart.png';
import flagPAK from '../assets/PAK.png';
import flagTURKEY from '../assets/TURKEY.png';
import flagKOREA from '../assets/KOREA.png';
import flagUSD from '../assets/USD.png';
import flagNEWZEALAND from '../assets/Flag_of_New_Zealand.svg.png';
import flagCHINA from '../assets/CHINA.png';
import tradeprice from '../assets/Trade price.png';
import shirt from '../assets/Shirt.png';
import coat from '../assets/coat.png';
import jacket from '../assets/jacket.png';
import shorts from '../assets/shorts.png';
import bag from '../assets/bag.png';
import headphones from '../assets/headphones.png';
import wallet from '../assets/wallet.png';
import appicon1 from '../assets/facebook3.png';
import appicon2 from '../assets/twitter3.png';
import appicon3 from '../assets/instagram3.png';
import appicon4 from '../assets/linkedin3.png';
import appicon5 from '../assets/youtube3.png';
import AppImg1 from '../assets/market-button.png';
import AppImg2 from '../assets/Group.png';
import logoimg from '../assets/logo-colored.png';

export default function Productdetails() {
  const [selectedHelp, setSelectedHelp] = useState('Help');
  const [shipTo, setShipTo] = useState({ name: 'USA', flag: flagUSD });

  const handleHelpSelect = (label) => setSelectedHelp(label);
  const handleShipToSelect = (name, flag) => setShipTo({ name, flag });

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error('Failed to fetch product:', err.message);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  if (!product) return <p className="text-center mt-5 text-light">Loading product...</p>;

  return (
    <div style={{ backgroundColor: '#1c1e22', minHeight: '100vh' }} className="text-light">

      {/* Header */}
      <div className="container-fluid py-2 px-3 border-bottom" style={{ backgroundColor: '#2c2c2c' }}>
        <div className="row align-items-center justify-content-between gx-2">
          {/* Logo */}
          <div className="col-auto d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: '40px' }} className="me-2" />
            <img src={brand} alt="Brand" style={{ height: '40px' }} />
          </div>
          {/* Search */}
          <div className="col col-md-6 d-flex">
            <select className="form-select w-auto me-2 bg-dark text-light border-secondary">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>
            <input
              type="text"
              className="form-control me-2 bg-dark text-light border-secondary"
              placeholder="Search products..."
            />
            <button className="btn btn-info">Search</button>
          </div>
          {/* Icons */}
          <div className="col-auto d-flex align-items-center">
            <HeaderIcon img={profileIcon} label="Profile" onClick={() => {}} />
            <HeaderIcon img={ordersIcon} label="Orders" onClick={() => {}} />
            <HeaderIcon img={msgIcon} label="Messages" onClick={() => {}} />
            <HeaderIcon img={cartIcon} label="Cart" onClick={() => {}} />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid px-3 mt-2">
        <div className="row align-items-center justify-content-between gx-2 text-light">
          {/* Category */}
          <div className="col-auto">
            <button className="btn btn-sm btn-outline-info fw-bold">All Categories</button>
          </div>
          {/* Nav Links */}
          <div className="col d-flex justify-content-center flex-wrap">
            <NavTextButton label="Hot Offers" />
            <NavTextButton label="Gift Boxes" />
            <NavTextButton label="Projects" />
            <NavTextButton label="Menu Items" />
            <div className="dropdown mx-2">
              <button className="btn btn-sm btn-outline-info dropdown-toggle fw-bold" data-bs-toggle="dropdown">
                {selectedHelp}
              </button>
              <ul className="dropdown-menu bg-dark border-secondary">
                <li><button className="dropdown-item text-light" onClick={() => handleHelpSelect('FAQ')}>FAQ</button></li>
                <li><button className="dropdown-item text-light" onClick={() => handleHelpSelect('Customer Service')}>Customer Service</button></li>
              </ul>
            </div>
          </div>
          {/* Ship To */}
          <div className="col-auto d-flex align-items-center">
            <select className="form-select form-select-sm me-2 bg-dark text-light border-secondary">
              <option>EN / USD</option>
              <option>ES / EUR</option>
              <option>FR / EUR</option>
              <option>IN / INR</option>
            </select>
            <div className="dropdown">
              <button className="btn btn-sm btn-outline-info dropdown-toggle fw-bold d-flex align-items-center gap-2" data-bs-toggle="dropdown">
                <img src={shipTo.flag} alt={shipTo.name} style={{ height: '20px' }} />
                {shipTo.name}
              </button>
              <ul className="dropdown-menu bg-dark border-secondary">
                {[
                  ['Pakistan', flagPAK],
                  ['Turkey', flagTURKEY],
                  ['Korea', flagKOREA],
                  ['USA', flagUSD],
                  ['New Zealand', flagNEWZEALAND],
                  ['China', flagCHINA],
                ].map(([name, flag]) => (
                  <li key={name}><button className="dropdown-item text-light" onClick={() => handleShipToSelect(name, flag)}>{name}</button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container-fluid px-3 mt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-2">
            <li className="breadcrumb-item"><button className="btn btn-link p-0 text-info">Home</button></li>
            <li className="breadcrumb-item"><button className="btn btn-link p-0 text-info">Clothing</button></li>
            <li className="breadcrumb-item"><button className="btn btn-link p-0 text-info">Men's wear</button></li>
            <li className="breadcrumb-item active text-light" aria-current="page">Summer Clothing</li>
          </ol>
        </nav>
      </div>

      {/* Product Info */}
      <div className="container shadow-sm p-4 mb-4 rounded" style={{ backgroundColor: '#3c434b' }}>
        <div className="row">
          {/* Product Image */}
          <div className="col-md-4 mb-3">
            <img src={`http://localhost:5000/${product.image}`} alt={product.name} className="img-fluid border" style={{ borderColor: '#555' }} />
          </div>
          {/* Middle Info */}
          <div className="col-md-5 text-light">
            <div className="mb-2 text-success">✅ In Stock</div>
            <div className="mb-3 text-info">⭐⭐⭐⭐☆ (4.0) · 120 reviews · 300 sold</div>
            <img src={tradeprice} alt="Brand" className="mb-3" style={{ width: '100px' }} />
            <h3 className="text-info mb-2">{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <button className="btn btn-outline-info mt-3">⭐ Save for Later</button>
          </div>
          {/* Seller Info */}
          <div className="col-md-3">
            <div className="rounded p-3" style={{ backgroundColor: '#2c2c2c' }}>
              <h6 className="text-light mb-2">Seller Info</h6>
              <p className="text-light mb-1"><strong>Name:</strong> Global Fashions</p>
              <p className="text-light mb-1"><strong>Country:</strong> <img src={flagUSD} alt="USA" style={{ height: '20px' }} /> USA</p>
              <p className="text-success">✅ Verified Seller</p>
              <button className="btn btn-outline-info btn-sm w-100 mb-2">Send Inquiry</button>
              <button className="btn btn-outline-secondary btn-sm w-100">Seller's Profile</button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="bg-dark border-top p-4 mb-4">
        <h5 className="text-info mb-4">Related Items</h5>
        <div className="d-flex justify-content-between flex-wrap gap-3">
          {[{ src: shirt, label: 'Shirt', price: '$10.89' },
            { src: wallet, label: 'Wallet', price: '$6.50' },
            { src: bag, label: 'Travel Bag', price: '$19.75' },
            { src: coat, label: 'Coat', price: '$42.90' },
            { src: headphones, label: 'Headphones', price: '$18.99' }].map((item, idx) => (
              <div key={idx} className="text-center p-3 rounded" style={{ backgroundColor: '#2c2c2c', width: '160px' }}>
                <img src={item.src} alt={item.label} className="mb-2" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                <div className="text-info fw-bold">{item.price}</div>
                <div className="text-light">{item.label}</div>
              </div>
            ))}
        </div>
      </div>

      {/* Slim Offer */}
      <div className="d-flex justify-content-between align-items-center px-4 py-4 rounded mb-4" style={{ backgroundColor: '#0dcaf0', color: 'white' }}>
        <div className="fw-bold">Get more discount than 100 USD</div>
        <button className="btn btn-dark fw-semibold px-3">Shop Now</button>
      </div>

      {/* Footer */}
      <div className="container-fluid border-top pt-5 pb-4 mt-5" style={{ backgroundColor: '#2c2c2c' }}>
        <div className="container text-light">
          <div className="row">
            <div className="col-md-3 mb-4 text-center text-md-start">
              <img src={logoimg} alt="Brand Logo" className="mb-3" style={{ width: '120px' }} />
              <p>CONTACT US</p>
              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                {[appicon1, appicon2, appicon3, appicon4, appicon5].map((icon, i) => (
                  <button key={i} className="bg-transparent border-0 p-2 rounded">
                    <img src={icon} alt={`Icon ${i + 1}`} style={{ width: '25px', height: '25px' }} />
                  </button>
                ))}
              </div>
            </div>
            {/* Links */}
            <FooterLinks title="About" links={['About Us', 'Find Store', 'Categories', 'Blogs']} />
            <FooterLinks title="Information" links={['Help Centre', 'Money Refund', 'Shipping', 'Contact Us']} />
            <FooterLinks title="For Users" links={['Login', 'Register', 'Settings', 'My Orders']} />
            <div className="col-md-3 mb-3">
              <h6 className="fw-bold">Get App</h6>
              <div className="d-flex flex-column gap-2">
                <a href="#"><img src={AppImg1} alt="App Store" style={{ width: '140px' }} /></a>
                <a href="#"><img src={AppImg2} alt="Google Play" style={{ width: '140px' }} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thin Grey Footer */}
      <div style={{ backgroundColor: '#1c1e22' }} className="border-top py-2 text-light">
        <div className="container d-flex justify-content-between align-items-center">
          <small>©2023 Ecommerce</small>
          {/* Language dropdown */}
          <div className="dropdown">
            <button className="btn btn-sm btn-outline-info dropdown-toggle d-flex align-items-center gap-2" data-bs-toggle="dropdown">
              <img src={shipTo.flag} alt={shipTo.name} style={{ height: '20px' }} />
              {shipTo.name}
            </button>
            <ul className="dropdown-menu bg-dark border-secondary dropdown-menu-end">
              {[
                ['Urdu', flagPAK],
                ['Turkish', flagTURKEY],
                ['Korean', flagKOREA],
                ['English', flagUSD],
                ['Maori', flagNEWZEALAND],
                ['Chinese', flagCHINA]
              ].map(([lang, flag]) => (
                <li key={lang}><button className="dropdown-item text-light" onClick={() => handleShipToSelect(lang, flag)}>{lang}</button></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

// Reusable components
function HeaderIcon({ img, label, onClick }) {
  return (
    <button onClick={onClick} className="bg-transparent border-0 text-light mx-3">
      <img src={img} alt={label} style={{ height: '36px', width: '36px' }} />
      <div style={{ fontSize: '0.8rem' }}>{label}</div>
    </button>
  );
}
function NavTextButton({ label }) {
  return <button className="btn btn-sm btn-outline-info fw-bold mx-1">{label}</button>;
}
function FooterLinks({ title, links }) {
  return (
    <div className="col-md-2 mb-3">
      <h6 className="fw-bold">{title}</h6>
      <div className="d-flex flex-column">
        {links.map((link) => (
          <button key={link} className="btn btn-link text-start text-light p-0 mb-1">{link}</button>
        ))}
      </div>
    </div>
  );
}
