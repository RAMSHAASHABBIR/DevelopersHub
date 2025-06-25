import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cart from '../pages/cart';
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
import gridIcon from '../assets/gridviewbutton.png';
import listIcon from '../assets/listviewbutton.png';
import appicon1 from '../assets/facebook3.png';
import appicon2 from '../assets/twitter3.png';
import appicon3 from '../assets/instagram3.png';
import appicon4 from '../assets/linkedin3.png';
import appicon5 from '../assets/youtube3.png';
import AppImg1 from '../assets/market-button.png';
import AppImg2 from '../assets/Group.png';
import logoimg from '../assets/logo-colored.png';


export default function ProductView() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = async (productId) => {
  try {
    const token = localStorage.getItem('token');
    await axios.post(
      'http://localhost:5000/api/cart/add',
      { productId, quantity: 1 },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert('Product added to cart');
  } catch (err) {
    console.error('Add to cart error:', err.response?.data || err.message);
    alert(`Failed to add to cart: ${err.response?.data?.message || err.message}`);
  }
};



  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
      });
  }, []);
const filteredProducts = products.filter((product) => {
  // Only filter by category if not "All"
  const matchesCategory =
    selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();

  const matchesSearch = searchQuery.trim() === '' || (
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return matchesCategory && matchesSearch;
});



  
  const [selectedHelp, setSelectedHelp] = useState('Help');
  const [shipTo, setShipTo] = useState({ name: 'USA', flag: flagUSD });

  const handleHelpSelect = (label) => setSelectedHelp(label);
  const handleShipToSelect = (name, flag) => setShipTo({ name, flag });

  


  return (
    <><div style={{ backgroundColor: '#1c1e22', minHeight: '100vh' }} className="text-light">
      {/* Header */}
    <div className="container-fluid py-2 px-3 border-bottom" style={{ backgroundColor: '#2c2c2c' }}>
        <div className="row align-items-center justify-content-between gx-2">

          {/* Logo */}
          <div className="col-auto d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: '40px' }} className="me-2" />
            <img src={brand} alt="Brand" style={{ height: '40px' }} />
          </div>

      <div className="container mt-4">
  {/* Category + Search */}
  <div className="row mb-4">
    <div className="col-md-8 d-flex">
      <select
        className="form-select w-auto me-2"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <select className="form-select w-auto me-2 bg-dark text-light border-secondary"></select>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Bags">Bags</option>
      </select>
      
      <input
        type="text"
        className="form-control me-2 bg-dark text-light border-secondary"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button className="btn btn-primary" disabled>
        Search
      </button>
    </div>
  </div>
   {/* Right-side Icons */}
          <div className="col-auto d-flex align-items-center">
            <HeaderIcon img={profileIcon} onClick={() => console.log('Go to Profile')} />
            <HeaderIcon img={ordersIcon} onClick={() => console.log('Go to Orders')} />
            <HeaderIcon img={msgIcon} onClick={() => console.log('Go to Messages')} />
            <HeaderIcon img={cartIcon} onClick={() => navigate('/cart')} />
          </div>


  
</div>
</div>
</div>

         


      {/* Divider */}
      <div className="border-bottom my-2"></div>

      {/* Navbar */}
      <div className="container-fluid px-3">
        <div className="row align-items-center justify-content-between gx-2 text-light">

          {/* Category Button */}
          <div className="col-auto d-flex align-items-center">
            <button className="btn btn-sm btn-outline-info dropdown-toggle fw-bold">
              All Categories
            </button>
          </div>

          {/* Nav Links */}
          <div className="col d-flex justify-content-center flex-wrap">
            <NavTextButton label="Hot Offers" />
            <NavTextButton label="Gift Boxes" />
            <NavTextButton label="Projects" />
            <NavTextButton label="Menu Items" />

            {/* Help Dropdown (Dynamic) */}
            <div className="dropdown mx-2">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle fw-bold"
                type="button"
                data-bs-toggle="dropdown"
              >
                {selectedHelp}
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => handleHelpSelect('FAQ')}>FAQ</button></li>
                <li><button className="dropdown-item" onClick={() => handleHelpSelect('Customer Service')}>Customer Service</button></li>
              </ul>
            </div>
          </div>

          {/* Language/Currency + Ship To */}
          <div className="col-auto d-flex align-items-center">
            {/* Language/Currency */}
            <select className="form-select form-select-sm me-2 w-auto fw-bold">
              <option>EN / USD</option>
              <option>ES / EUR</option>
              <option>FR / EUR</option>
              <option>IN / INR</option>
            </select>

            {/* Ship To (Dynamic) */}
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-info dropdown-toggle fw-bold"
                data-bs-toggle="dropdown"
              >
                <img src={shipTo.flag} alt={shipTo.name} style={{ height: '20px' }} />
                {shipTo.name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Pakistan', flagPAK)}><img src={flagPAK} alt="Pakistan" style={{ height: '20px' }} />Pakistan</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Turkey', flagTURKEY)}><img src={flagTURKEY} alt="Turkey" style={{ height: '20px' }} />Turkey</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Korea', flagKOREA)}><img src={flagKOREA} alt="Korea" style={{ height: '20px' }} />Korea</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('USA', flagUSD)}><img src={flagUSD} alt="USA" style={{ height: '20px' }} />USA</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('New Zealand', flagNEWZEALAND)}><img src={flagNEWZEALAND} alt="New Zealand" style={{ height: '20px' }} />New Zealand</button></li>
                <li><button className="dropdown-item d-flex align-items-center gap-2" onClick={() => handleShipToSelect('China', flagCHINA)}><img src={flagCHINA} alt="China" style={{ height: '20px' }} />China</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}


    {/* Breadcrumb Navigation */}
<div className="container-fluid px-3 mt-2">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb mb-2">
      <li className="breadcrumb-item">
        <button className="btn btn-link p-0 text-info">Home</button>
      </li>
      <li className="breadcrumb-item">
        <button className="btn btn-link p-0 text-info">Clothing</button>
      </li>
      <li className="breadcrumb-item">
        <button className="btn btn-link p-0 text-info">Men's wear</button>
      </li>
      <li className="breadcrumb-item active fw-bold" aria-current="page">
        <button className="btn btn-link p-0 text-info">Summer Clothing</button>
      </li>
    </ol>
  </nav>
</div>
    
 <div className="container mt-4">
  <div className="row">
   {/* Sidebar */}
<div className="col-md-3 mb-3">
  <div className="border rounded p-3 bg-dark shadow-sm h-100 d-flex flex-column justify-content-between">
    
    {/* All Filters */}
    <div>
     {/* Category Dropdown */}
<div className="dropdown mb-3">
  <button
    className="btn btn-dark dropdown-toggle w-100 text-start"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Category
  </button>
  <ul className="dropdown-menu w-100 bg-dark border-secondary">
    {["Mobile Accessory", "Electronics", "Smartphones", "Modern Tech"].map(
      (category) => (
        <li key={category}>
          <a className="dropdown-item text-light" href="#">
            {category}
          </a>
        </li>
      )
    )}
    <li>
      <a className="dropdown-item text-info mt-2" href="#">
        See All
      </a>
    </li>
  </ul>
</div>

{/* Brands Dropdown with checkboxes */}
<div className="dropdown mb-3">
  <button
    className="btn btn-dark dropdown-toggle w-100 text-start"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Brands
  </button>
  <ul className="dropdown-menu w-100 px-3 bg-dark border-secondary">
    {["Apple", "Samsung", "Xiaomi", "OnePlus"].map((brand) => (
      <li className="form-check text-light py-1" key={brand}>
        <input
          className="form-check-input bg-secondary border-0"
          type="checkbox"
          id={brand.toLowerCase()}
          style={{ cursor: "pointer" }}
        />
        <label
          className="form-check-label ms-2"
          htmlFor={brand.toLowerCase()}
          style={{ cursor: "pointer" }}
        >
          {brand}
        </label>
      </li>
    ))}
    <li>
      <a className="dropdown-item text-info mt-2" href="#">
        See All
      </a>
    </li>
  </ul>
</div>

{/* Features Dropdown with checkboxes */}
<div className="dropdown mb-3">
  <button
    className="btn btn-dark dropdown-toggle w-100 text-start"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Features
  </button>
  <ul className="dropdown-menu w-100 px-3 bg-dark border-secondary">
    {[
      { id: "5g", label: "5G Support" },
      { id: "waterproof", label: "Waterproof" },
      { id: "wireless", label: "Wireless Charging" },
      { id: "faceunlock", label: "Face Unlock" }
    ].map((feature) => (
      <li className="form-check text-light py-1" key={feature.id}>
        <input
          className="form-check-input bg-secondary border-0"
          type="checkbox"
          id={feature.id}
          style={{ cursor: "pointer" }}
        />
        <label
          className="form-check-label ms-2"
          htmlFor={feature.id}
          style={{ cursor: "pointer" }}
        >
          {feature.label}
        </label>
      </li>
    ))}
    <li>
      <a className="dropdown-item text-info mt-2" href="#">
        See All
      </a>
    </li>
  </ul>
</div>

{/* More Options Dropdown */}
<div className="dropdown mb-3">
  <button
    className="btn btn-dark dropdown-toggle w-100 text-start"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    More Options
  </button>
  <ul className="dropdown-menu w-100 bg-dark border-secondary">
    {["Best Sellers", "New Arrivals", "Top Rated"].map((option) => (
      <li key={option}>
        <a className="dropdown-item text-light" href="#">
          {option}
        </a>
      </li>
    ))}
    <li>
      <a className="dropdown-item text-info mt-2" href="#">
        See All
      </a>
    </li>
  </ul>
</div>


     {/* Condition Section */}
<div className="mb-3 text-light">
  <h6 className="mb-2 fs-6 fw-semibold">Condition</h6>
  {["Any", "Brand New", "Old"].map((cond) => (
    <div className="form-check" key={cond}>
      <input
        className="form-check-input bg-secondary border-0"
        type="checkbox"
        id={`condition${cond.replace(/\s/g, "")}`}
      />
      <label
        className="form-check-label ms-2"
        htmlFor={`condition${cond.replace(/\s/g, "")}`}
      >
        {cond}
      </label>
    </div>
  ))}
</div>

{/* Rating Section */}
<div className="mb-3 text-light">
  <h6 className="mb-2 fs-6 fw-semibold">Rating</h6>
  {[5, 4, 3, 2, 1, 0].map((star) => (
    <div className="form-check" key={star}>
      <input
        className="form-check-input bg-secondary border-0"
        type="checkbox"
        id={`rating-${star}`}
      />
      <label className="form-check-label ms-2" htmlFor={`rating-${star}`}>
        {Array.from({ length: star }, (_, i) => (
          <span key={`filled-${i}`} className="text-warning">
            &#9733;
          </span>
        ))}
        {Array.from({ length: 5 - star }, (_, i) => (
          <span key={`empty-${i}`} className="text-muted">
            &#9734;
          </span>
        ))}
      </label>
    </div>
  ))}
</div>

{/* Price Range Filter */}
<div className="border-top border-secondary pt-3 mt-3 text-light">
  <h6 className="mb-3 fs-6 fw-semibold">Price Range</h6>
  <input
    type="range"
    className="form-range"
    min="0"
    max="100000"
    step="100"
    id="priceRangeSlider"
    onChange={(e) => {
      const value = e.target.value;
      document.getElementById("maxPriceInput").value = value;
    }}
  />
  <div className="d-flex justify-content-between mb-2 gap-2">
    <input
      type="number"
      className="form-control form-control-sm bg-dark border-secondary text-light"
      placeholder="Min"
      id="minPriceInput"
      style={{ width: "45%" }}
    />
    <input
      type="number"
      className="form-control form-control-sm bg-dark border-secondary text-light"
      placeholder="Max"
      id="maxPriceInput"
      style={{ width: "45%" }}
    />
  </div>
  <button
    className="btn btn-sm btn-primary w-100"
    onClick={() => {
      const min = document.getElementById("minPriceInput").value;
      const max = document.getElementById("maxPriceInput").value;
      alert(`Filtering products between Rs. ${min} and Rs. ${max}`);
    }}
  >
    Apply
  </button>
</div>
</div>
</div>
</div>


 {/* Main Content Area */}
    <div className="col-md-9">
      {/* Content Top Bar */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        {/* Verified Only Checkbox */}
        <div className="form-check me-3">
          <input className="form-check-input" type="checkbox" id="verifiedOnly" />
          <label className="form-check-label" htmlFor="verifiedOnly">
            Verified Only
          </label>
        </div>

       <div className="dropdown me-3">
  <button className="btn btn-outline-light dropdown-toggle bg-dark text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter by Features
  </button>
  <ul className="dropdown-menu bg-dark border-secondary">
    <li><a className="dropdown-item text-light" href="#">5G</a></li>
    <li><a className="dropdown-item text-light" href="#">Wireless Charging</a></li>
    <li><a className="dropdown-item text-light" href="#">Waterproof</a></li>
    <li><a className="dropdown-item text-primary" href="#">See All</a></li>
  </ul>
</div>


     <div className="d-flex align-items-center">
  <button className="btn bg-dark border border-secondary me-2 p-1" title="Grid View">
    <img src={gridIcon} alt="Grid View" width="24" height="24" />
  </button>
  <button className="btn bg-dark border border-secondary p-1" title="List View">
    <img src={listIcon} alt="List View" width="24" height="24" />
  </button>
</div>
</div>


      

   {/* Product Grid */}
<div className="row">
  {filteredProducts.length === 0 ? (
    <p className="text-light">No products found.</p>
  ) : (
    filteredProducts.map((product) => (
      <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card h-100 bg-black border border-secondary text-light">
          <img
            src={`http://localhost:5000/${product.image}`}
            className="card-img-top"
            alt={product.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-light">{product.name}</h5>
            <p className="text-secondary">{product.category}</p>
            <p className="text-light">{product.description}</p>
            <p className="fw-bold text-info">${product.price}</p>
            <p className="text-secondary small">Stock: {product.stock}</p>

            <div className="mt-auto d-flex justify-content-between">
              <button
                className="btn btn-sm btn-outline-info"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                See Details
              </button>
              <button
                className="btn btn-sm btn-success"
                onClick={() => addToCart(product._id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
  )}
</div>


  {/* Product list above this */}

<div className="d-flex justify-content-between align-items-center">

 <div className="d-flex align-items-center text-light">
  <label htmlFor="showCount" className="me-2 mb-0">Show</label>
  <select id="showCount" className="form-select form-select-sm bg-dark text-light border-secondary" style={{ width: '80px' }}>
    <option value="5">5</option>
    <option value="10" selected>10</option>
    <option value="15">15</option>
    <option value="20">20</option>
  </select>
</div>


  <nav>
  <ul className="pagination pagination-sm mb-0">
    <li className="page-item">
      <button className="page-link bg-dark text-light border-secondary">{'<'}</button>
    </li>
    <li className="page-item active">
      <button className="page-link bg-secondary text-light border-secondary">1</button>
    </li>
    <li className="page-item">
      <button className="page-link bg-dark text-light border-secondary">2</button>
    </li>
    <li className="page-item">
      <button className="page-link bg-dark text-light border-secondary">3</button>
    </li>
    <li className="page-item">
      <button className="page-link bg-dark text-light border-secondary">{'>'}</button>
    </li>
  </ul>
</nav>
</div>


</div>

    </div>
 
  </div>
  


{/* Subscribe Newsletter Section */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="bg-dark border border-secondary rounded shadow p-5 text-center">

        {/* Heading */}
        <h5 className="fw-bold mb-2 text-light">Subscribe to our newsletter</h5>

        {/* Subtext */}
        <p className="text-secondary mb-4">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        {/* Email Input + Subscribe Button */}
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <input
            type="email"
            className="form-control bg-secondary bg-opacity-10 text-light border border-secondary"
            placeholder="Enter your email"
            style={{ maxWidth: '300px' }}
          />
          <button className="btn btn-primary fw-semibold">Subscribe</button>
        </div>

      </div>
    </div>
  </div>
</div>



{/* Footer Section */}
<div className="container-fluid bg-dark border-top border-secondary pt-5 pb-4 mt-5 text-light">
  <div className="container">
    <div className="row">

      {/* Left Column: Logo and Icons */}
      <div className="col-md-3 mb-4 text-center text-md-start">
        <img src={logoimg} alt="Brand Logo" className="mb-3" style={{ width: '120px' }} />
        <p className="text-secondary mb-4">CONTACT US</p>
        <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
          {[appicon1, appicon2, appicon3, appicon4, appicon5].map((icon, i) => (
            <button key={i} className="btn btn-outline-light p-2 rounded-circle border-0">
              <img src={icon} alt={`Icon ${i + 1}`} style={{ width: '25px', height: '25px' }} />
            </button>
          ))}
        </div>
      </div>

      {/* About Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold text-light">About</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-secondary p-0 mb-1">About Us</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Find Store</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Categories</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Blogs</button>
        </div>
      </div>

      {/* Information Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold text-light">Information</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Help Centre</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Money Refund</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Shipping</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Contact Us</button>
        </div>
      </div>

      {/* For Users Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold text-light">For Users</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Login</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Register</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">Settings</button>
          <button className="btn btn-link text-start text-secondary p-0 mb-1">My Orders</button>
        </div>
      </div>

      {/* Get App Column */}
      <div className="col-md-3 mb-3">
        <h6 className="fw-bold text-light">Get App</h6>
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

{/* Thin Darker Footer */}
<div style={{ backgroundColor: '#1a1a1a' }} className="border-top border-secondary py-2">
  <div className="container d-flex justify-content-between align-items-center">

    {/* Left Side Text */}
    <small className="text-secondary">©2023 Ecommerce</small>

    {/* Language Dropdown */}
    <div className="dropdown">
      <button
        className="btn btn-sm btn-outline-light dropdown-toggle fw-bold d-flex align-items-center gap-2"
        data-bs-toggle="dropdown"
      >
        <img src={shipTo.flag} alt={shipTo.name} style={{ height: '20px' }} />
        {shipTo.name}
      </button>
      <ul className="dropdown-menu dropdown-menu-end bg-dark border border-secondary">
        <li>
          <button className="dropdown-item text-light d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Urdu', flagPAK)}>
            <img src={flagPAK} alt="Urdu" style={{ height: '20px' }} /> Urdu
          </button>
        </li>
        <li>
          <button className="dropdown-item text-light d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Turkish', flagTURKEY)}>
            <img src={flagTURKEY} alt="Turkish" style={{ height: '20px' }} /> Turkish
          </button>
        </li>
        <li>
          <button className="dropdown-item text-light d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Korean', flagKOREA)}>
            <img src={flagKOREA} alt="Korean" style={{ height: '20px' }} /> Korean
          </button>
        </li>
        <li>
          <button className="dropdown-item text-light d-flex align-items-center gap-2" onClick={() => handleShipToSelect('English', flagUSD)}>
            <img src={flagUSD} alt="English" style={{ height: '20px' }} /> English
          </button>
        </li>
        <li>
          <button className="dropdown-item text-light d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Maori', flagNEWZEALAND)}>
            <img src={flagNEWZEALAND} alt="Maori" style={{ height: '20px' }} /> Maori
          </button>
        </li>
        <li>
          <button className="dropdown-item text-light d-flex align-items-center gap-2" onClick={() => handleShipToSelect('Chinese', flagCHINA)}>
            <img src={flagCHINA} alt="Chinese" style={{ height: '20px' }} /> Chinese
          </button>
        </li>
      </ul>
    </div>

  </div>
</div>










</div>

</>
  );
}


// Reusable component for icons
function HeaderIcon({ img, label, onClick }) {
  return (
    <button
      className="d-flex flex-column align-items-center mx-3 border-0 bg-transparent"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <img src={img} alt={label} style={{ height: '36px', width: '36px', marginBottom: '4px' }} />
      <span className="fw-semibold" style={{ fontSize: '0.8rem' }}>{label}</span>
    </button>
  );
}

// Reusable text nav button
function NavTextButton({ label }) {
  return (
    <button className="btn btn-sm btn-outline-secondary fw-bold mx-1">
      {label}
    </button>
  );
}
