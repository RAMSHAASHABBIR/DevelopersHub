import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Thumbnail01 from '../assets/Mask group.png'   // or your correct image name
import ProfileImg from "../assets/Avatar.png";       // change to actual filename
import BoxImage1 from "../assets/block.png";            // change to actual filename
import BoxImage2 from "../assets/block (1).png";            // change to actual filename
import TimerBox1 from '../assets/Group 971.png';
import TimerBox2 from '../assets/Group 972.png';
import TimerBox3 from '../assets/Group 973.png';
import TimerBox4 from '../assets/Group 974.png';
import Electronic1 from '../assets/Item.png';
import Electronic2 from '../assets/Item (1).png';
import Electronic3 from '../assets/Item (2).png';
import Electronic4 from '../assets/Item (3).png';
import Electronic5 from '../assets/Item (4).png';
import HomeOutdoorImg from '../assets/Group 969.png';
import HomeItem1 from '../assets/Item0.png';
import HomeItem2 from '../assets/ITEM1.png';
import HomeItem3 from '../assets/ITEM2.png';
import HomeItem4 from '../assets/ITEM3.png';
import HomeItem5 from '../assets/ITEM4.png';
import HomeItem6 from '../assets/Item (5).png';
import HomeItem7 from '../assets/Item (6).png';
import HomeItem8 from '../assets/Item (7).png';
import ElectronicItem1 from '../assets/ElectronicItem1.png';
import ElectronicItem2 from '../assets/ElectronicItem2.png';
import ElectronicItem3 from '../assets/ElectronicItem3.png';
import ElectronicItem4 from '../assets/ElectronicItem4.png';
import ElectronicItem5 from '../assets/ElectronicItem5.png';
import ElectronicItem6 from '../assets/ElectronicItem6.png';
import ElectronicItem7 from '../assets/ElectronicItem7.png';
import ElectronicItem8 from '../assets/ElectronicItem8.png';
import ElectronicSecImg from '../assets/Group 970.png';
import RequestImg from '../assets/Group 982.png';
import shirt from '../assets/Shirt.png';
import coat from '../assets/coat.png';
import headphones from '../assets/headphones.png';
import jacket from '../assets/jacket.png';
import kettle from '../assets/kettle.png';
import matka from '../assets/matka.png';
import shorts from '../assets/shorts.png';
import wallet from '../assets/wallet.png';
import bag from '../assets/bag.png';
import service1 from '../assets/Maskgroup(0).png';
import service2 from '../assets/Mask group (1).png';
import service3 from '../assets/Mask group (2).png';
import service4 from '../assets/Mask group (3).png';
import icon1 from '../assets/search.png';
import icon2 from '../assets/inventory_2.png';
import icon3 from '../assets/send.png';
import icon4 from '../assets/security.png';
import appicon1 from '../assets/facebook3.png';
import appicon2 from '../assets/twitter3.png';
import appicon3 from '../assets/instagram3.png';
import appicon4 from '../assets/linkedin3.png';
import appicon5 from '../assets/youtube3.png';
import AppImg1 from '../assets/market-button.png';
import AppImg2 from '../assets/Group.png';
import logoimg from '../assets/logo-colored.png';






export default function Home() {

   const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate('/ProductView'); // Must match the path defined in App.js
  };


   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 4))); // show 4 featured
  }, []);

  const [selectedHelp, setSelectedHelp] = useState('Help');
  const [shipTo, setShipTo] = useState({ name: 'USA', flag: flagUSD });

  const handleHelpSelect = (label) => setSelectedHelp(label);
  const handleShipToSelect = (name, flag) => setShipTo({ name, flag });

  return (
    <>
    
      {/* Header */}
      <div style={{ backgroundColor: '#1c1e22', minHeight: '100vh' }} className="text-light">
      <div className="container-fluid bg-dark py-2 px-3 border-bottom border-secondary">

        <div className="row align-items-center justify-content-between gx-2">

          {/* Logo */}
          <div className="col-auto d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: '40px' }} className="me-2" />
            <img src={brand} alt="Brand" style={{ height: '40px' }} />
          </div>

        {/* Category Dropdown + Search */}
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
  <button className="btn btn-primary">Search</button>
</div>


          {/* Right-side Icons */}
          <div className="col-auto d-flex align-items-center">
            <HeaderIcon img={profileIcon} onClick={() => console.log('Go to Profile')} />
            <HeaderIcon img={ordersIcon} onClick={() => console.log('Go to Orders')} />
            <HeaderIcon img={msgIcon} onClick={() => console.log('Go to Messages')} />
            <HeaderIcon img={cartIcon} onClick={() => console.log('Go to Cart')} />
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-bottom border-secondary my-2"></div>

      {/* Navbar */}
      <div className="container-fluid px-3">
        <div className="row align-items-center justify-content-between gx-2">

          {/* Category Button */}
          <div className="col-auto d-flex align-items-center">
            <button className="form-select w-auto me-2 bg-dark text-light border-secondary">
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
            <select className="form-control me-2 bg-dark text-light border-secondary">
              <option>EN / USD</option>
              <option>ES / EUR</option>
              <option>FR / EUR</option>
              <option>IN / INR</option>
            </select>

            {/* Ship To (Dynamic) */}
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle fw-bold d-flex align-items-center gap-2"
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
{/* Categories and Image in One Box */}
<div className="container my-4">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="border rounded shadow p-4 bg-dark d-flex flex-column flex-md-row align-items-stretch">

        {/* Categories - Left */}
        <div className="flex-grow-1 me-md-4 mb-4 mb-md-0" style={{ maxWidth: '200px' }}>
          <h5 className="text-center mb-3 fw-bold">Categories</h5>
          <div className="d-flex flex-column gap-2">
            <button className="btn btn-outline-primary">Automobiles</button>
            <button className="btn btn-outline-primary">Clothes and Wear</button>
            <button className="btn btn-outline-primary">Home Interiors</button>
            <button className="btn btn-outline-primary">Computer and Tech</button>
            <button className="btn btn-outline-primary">Tools</button>
            <button className="btn btn-outline-primary">Sports</button>
            <button className="btn btn-outline-primary">Pets</button>
            <button className="btn btn-outline-primary">Machinery Tools</button>
                  <button className="btn btn-outline-primary" onClick={handleSeeAllClick}>
        See All
      </button>
          </div>
        </div>

        {/* Image with Text and Button - Center */}
        <div className="position-relative me-md-4" style={{ maxWidth: '700px', flexShrink: 0 }}>
          <img
            src={Thumbnail01}
            alt="Category Visual"
            className="img-fluid rounded"
            style={{ height: '450px', width: '600%', objectFit: 'cover' }}
          />
          <div className="position-absolute top-0 start-0 p-3 text-white fw-bold" style={{ fontSize: '1.2rem', textShadow: '1px 1px 4px black' }}>
            Latest trending electronic items
          </div>
          <div className="position-absolute bottom-0 start-0 p-3">
            <button className="btn btn-outline-light fw-bold shadow">Learn More</button>
          </div>
        </div>

        {/* Vertical Right Boxes */}
        <div className="d-flex flex-column justify-content-between" style={{ width: '250px' }}>

          {/* Greeting Box */}
          <div className="border rounded p-3 mb-3 bg-dark d-flex align-items-start">
            <img
              src={ProfileImg}
              alt="Profile"
              className="rounded-circle me-2"
              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
            />
            <div>
              <p className="mb-1 fw-semibold">Hi,<br />Let’s get started</p>
              {/* <div className="d-flex gap-2">
                <button className="btn btn-primary btn-sm">Join Now</button>
                <button className="btn btn-outline-primary btn-sm">Login</button>
              </div> */}
            </div>
          </div>

          {/* Second Image */}
          <div className="mb-3">
            <img
              src={BoxImage1}
              alt="Ad 1"
              className="img-fluid rounded shadow"
              style={{ height: '140px', objectFit: 'cover', width: '100%' }}
            />
          </div>

          {/* Third Image */}
          <div>
            <img
              src={BoxImage2}
              alt="Ad 2"
              className="img-fluid rounded shadow"
              style={{ height: '140px', objectFit: 'cover', width: '100%' }}
            />
          </div>

        </div>

      </div>
    </div>
  </div>
</div>


{/* Deals and Offers Section */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="bg-dark border border-secondary rounded shadow p-4 d-flex flex-column flex-md-row align-items-start" style={{ minHeight: '220px' }}>

        {/* Left Section - Title + Subtitle + Timers */}
        <div className="me-4 mb-3 mb-md-0" style={{ minWidth: '250px' }}>
          <h4 className="fw-bold mb-1 text-light">Deals and offers</h4> 
          <p className="text-secondary mb-3">hygiene equipments</p>
          
          {/* Timer Images Row */}
          <div className="d-flex gap-2">
            <img src={TimerBox1} alt="Timer 1" style={{ width: '50px', height: '50px' }} className="bg-secondary bg-opacity-10 rounded p-1" />
            <img src={TimerBox2} alt="Timer 2" style={{ width: '50px', height: '50px' }} className="bg-secondary bg-opacity-10 rounded p-1" />
            <img src={TimerBox3} alt="Timer 3" style={{ width: '50px', height: '50px' }} className="bg-secondary bg-opacity-10 rounded p-1" />
            <img src={TimerBox4} alt="Timer 4" style={{ width: '50px', height: '50px' }} className="bg-secondary bg-opacity-10 rounded p-1" />
          </div>
        </div>

        {/* Right Section - 5 Product Images */}
        <div className="d-flex flex-wrap gap-3 justify-content-start">
          {[Electronic1, Electronic2, Electronic3, Electronic4, Electronic5].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              className="img-thumbnail bg-secondary bg-opacity-10 border-0"
              style={{ width: '170px', height: '180px', objectFit: 'cover' }}
            />
          ))}
        </div>

      </div>
    </div>
  </div>
</div>



{/* Home and Outdoor Section with Grid Items */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="border rounded shadow p-0 overflow-hidden bg-dark d-flex" style={{ height: '220px' }}>

        {/* Left Side Image with Overlay */}
        <div className="position-relative" style={{ width: '25%', height: '100%' }}>
          <img
            src={HomeOutdoorImg}
            alt="Home and Outdoor"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
          <div
            className="position-absolute top-0 start-0 p-2 text-white fw-bold"
            style={{ fontSize: '1rem', textShadow: '1px 1px 4px black' }}
          >
            Home and outdoor
          </div>
          <div className="position-absolute bottom-0 start-0 p-2">
            <button className="btn btn-outline-light btn-sm fw-bold shadow">Source Now</button>
          </div>
        </div>

        {/* Right Side Grid of 8 Images */}
        <div className="d-flex flex-wrap w-100 p-2 gap-2 justify-content-start align-content-start">
          {[HomeItem1, HomeItem2, HomeItem3, HomeItem4, HomeItem5, HomeItem6, HomeItem7, HomeItem8].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Item ${i + 1}`}
              className="rounded"
              style={{ width: '23%', height: '90px', objectFit: 'cover' }}
            />
          ))}
        </div>

      </div>
    </div>
  </div>
</div>


{/* Electronics Section with Grid Items */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="border rounded shadow p-0 overflow-hidden bg-dark d-flex" style={{ height: '220px' }}>

        {/* Left Side Image with Overlay */}
        <div className="position-relative" style={{ width: '25%', height: '100%' }}>
          <img
            src={ElectronicSecImg}
            alt="Consumer Electronics and Gadgets"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
          <div
            className="position-absolute top-0 start-0 p-2 text-white fw-bold"
            style={{ fontSize: '1rem', textShadow: '1px 1px 4px black' }}
          >
           Consumer Electronics and Gadgets
          </div>
          <div className="position-absolute bottom-0 start-0 p-2">
            <button className="btn btn-outline-light btn-sm fw-bold shadow">Source Now</button>
          </div>
        </div>

        {/* Right Side Grid of 8 Images */}
        <div className="d-flex flex-wrap w-100 p-2 gap-2 justify-content-start align-content-start">
          {[ElectronicItem1, ElectronicItem2, ElectronicItem3, ElectronicItem4, ElectronicItem5, ElectronicItem6, ElectronicItem7, ElectronicItem8].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Item ${i + 1}`}
              className="rounded"
              style={{ width: '23%', height: '90px', objectFit: 'cover' }}
            />
          ))}
        </div>

      </div>
    </div>
  </div>
</div>

{/* Request Quote Section */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div
        className="border rounded shadow bg-dark overflow-hidden position-relative"
        style={{ height: '400px' }}
      >
        {/* Background Image */}
        <img
          src={RequestImg}
          alt="Request"
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />

        {/* Overlay Text */}
        <div
          className="position-absolute top-0 start-0 p-4 text-white fw-bold"
          style={{
            fontSize: '1.4rem',
            textShadow: '1px 1px 5px rgba(0,0,0,0.7)',
            zIndex: 2
          }}
        >
          An Easy Way To Send Requests To All Suppliers
        </div>

        {/* Overlay Form */}
        <div
          className="position-absolute top-50 end-0 translate-middle-y bg-dark p-4 rounded shadow"
          style={{
            width: '450px',
            marginRight: '2rem',
            zIndex: 3
          }}
        >
          <h5 className="fw-bold mb-3">Write quote to supplier</h5>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="What item you need?"
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Additional details"
              rows="2"
            ></textarea>
          </div>

          <div className="d-flex align-items-center gap-2 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              style={{ maxWidth: '140px' }}
            />
            <select className="form-select" style={{ maxWidth: '100px' }}>
              <option>pcs</option>
              <option>kg</option>
              <option>liters</option>
            </select>
          </div>

          <button className="btn btn-primary w-100 fw-semibold">Send Query</button>
        </div>
      </div>
    </div>
  </div>
</div>



{/* Recommended Section */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="border rounded shadow bg-dark p-4" style={{ minHeight: '550px' }}>

        {/* Heading */}
        <h5 className="fw-bold mb-4">Recommended</h5>

        {/* Grid of 10 Images */}
        <div className="d-flex flex-wrap w-100 gap-3 justify-content-start align-content-start">
          {/* Item 1 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={shirt} alt="Shirt" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$10.89</div>
            <div className="text-muted small">Shirt</div>
          </div>

          {/* Item 2 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={wallet} alt="Wallet" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$6.50</div>
            <div className="text-muted small">Wallet</div>
          </div>

          {/* Item 3 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={kettle} alt="Kettle" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$22.99</div>
            <div className="text-muted small">Kettle</div>
          </div>

          {/* Item 4 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={jacket} alt="Jacket" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$35.00</div>
            <div className="text-muted small">Jacket</div>
          </div>

          {/* Item 5 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={bag} alt="Bag" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$12.40</div>
            <div className="text-muted small">Bag</div>
          </div>

          {/* Item 6 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={bag} alt="Travel Bag" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$19.75</div>
            <div className="text-muted small">Travel Bag</div>
          </div>

          {/* Item 7 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={shorts} alt="Shorts" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$8.60</div>
            <div className="text-muted small">Shorts</div>
          </div>

          {/* Item 8 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={matka} alt="Pot" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$14.25</div>
            <div className="text-muted small">Matka</div>
          </div>

          {/* Item 9 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={coat} alt="Coat" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$42.90</div>
            <div className="text-muted small">Coat</div>
          </div>

          {/* Item 10 */}
          <div className="text-center" style={{ width: '18%' }}>
            <img src={headphones} alt="Headphones" className="rounded mb-2" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            <div className="fw-bold small">$18.99</div>
            <div className="text-muted small">Headphones</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


{/* Extra Services Section */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="border rounded shadow bg-dark p-4" style={{ minHeight: '250px' }}>

        {/* Heading */}
        <h5 className="fw-bold mb-4">Extra Services</h5>

        {/* Grid of 4 Images */}
        <div className="d-flex flex-wrap gap-4 justify-content-start">

          {/* Service 1 */}
          <div className="position-relative text-center" style={{ width: '22%' }}>
            <img
              src={service1}
              alt="Service 1"
              className="rounded"
              style={{ width: '100%', height: '140px', objectFit: 'cover' }}
            />
            <button
              className="btn btn-outline-light position-absolute top-0 end-0 m-2 p-1 border rounded-circle"
              style={{ width: '30px', height: '30px' }}
            >
              <img src={icon1} alt="icon" style={{ width: '100%', height: '100%' }} />
            </button>
            <div className="fw-semibold mt-2 small">Source from industry hub</div>
          </div>

          {/* Service 2 */}
          <div className="position-relative text-center" style={{ width: '22%' }}>
            <img
              src={service2}
              alt="Service 2"
              className="rounded"
              style={{ width: '100%', height: '140px', objectFit: 'cover' }}
            />
            <button
              className="btn btn-outline-light position-absolute top-0 end-0 m-2 p-1 border rounded-circle"
              style={{ width: '30px', height: '30px' }}
            >
              <img src={icon2} alt="icon" style={{ width: '100%', height: '100%' }} />
            </button>
            <div className="fw-semibold mt-2 small">Customize your products</div>
          </div>

          {/* Service 3 */}
          <div className="position-relative text-center" style={{ width: '22%' }}>
            <img
              src={service3}
              alt="Service 3"
              className="rounded"
              style={{ width: '100%', height: '140px', objectFit: 'cover' }}
            />
            <button
              className="btn btn-outline-light position-absolute top-0 end-0 m-2 p-1 border rounded-circle"
              style={{ width: '30px', height: '30px' }}
            >
              <img src={icon3} alt="icon" style={{ width: '100%', height: '100%' }} />
            </button>
            <div className="fw-semibold mt-2 small">Fast and reliable shipping by ocean or air</div>
          </div>

          {/* Service 4 */}
          <div className="position-relative text-center" style={{ width: '22%' }}>
            <img
              src={service4}
              alt="Service 4"
              className="rounded"
              style={{ width: '100%', height: '140px', objectFit: 'cover' }}
            />
            <button
              className="btn btn-outline-light position-absolute top-0 end-0 m-2 p-1 border rounded-circle"
              style={{ width: '30px', height: '30px' }}
            >
              <img src={icon4} alt="icon" style={{ width: '100%', height: '100%' }} />
            </button>
            <div className="fw-semibold mt-2 small">Product monitoring and inspection</div>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>


{/* Subscribe Newsletter Section */}
<div className="container mb-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <div className="bg-dark border rounded shadow p-5 text-center">

        {/* Heading */}
        <h5 className="fw-bold mb-2">Subscribe on our newsletter</h5>

        {/* Subtext */}
        <p className="text-muted mb-4">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        {/* Email Input + Subscribe Button */}
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <input
            type="email"
            className="form-control"
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
<div className="container-fluid bg-dark border-top pt-5 pb-4 mt-5">
  <div className="container">
    <div className="row">

      {/* Left Column: Logo and Icons */}
      <div className="col-md-3 mb-4 text-center text-md-start">
        <img src={logoimg} alt="Brand Logo" className="mb-3" style={{ width: '120px' }} />
        <p className="text-muted mb-4">
          CONTACT US
        </p>
        <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
          {[appicon1, appicon2, appicon3, appicon4, appicon5].map((icon, i) => (
            <button key={i} className="btn btn-outline-secondary p-2 rounded-circle border-0">
              <img src={icon} alt={`Icon ${i + 1}`} style={{ width: '25px', height: '25px' }} />
            </button>
          ))}
        </div>
      </div>

      {/* About Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold">About</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-muted p-0 mb-1">About Us</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Find Store</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Categories</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Blogs</button>
        </div>
      </div>

      {/* Information Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold">Information</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-muted p-0 mb-1">Help Centre</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Money Refund</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Shipping</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Contact Us</button>
        </div>
      </div>

      {/* For Users Column */}
      <div className="col-md-2 mb-3">
        <h6 className="fw-bold">For Users</h6>
        <div className="d-flex flex-column">
          <button className="btn btn-link text-start text-muted p-0 mb-1">Login</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Register</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">Settings</button>
          <button className="btn btn-link text-start text-muted p-0 mb-1">My Orders</button>
        </div>
      </div>

      {/* Get App Column */}
      <div className="col-md-3 mb-3">
        <h6 className="fw-bold">Get App</h6>
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
<div style={{ backgroundColor: '#f1f1f1' }} className="border-top py-2">
  <div className="container d-flex justify-content-between align-items-center">

    {/* Left Side Text */}
    <small className="text-muted">©2023 Ecommerce</small>

    {/* Language Dropdown */}
    <div className="dropdown">
      <button
        className="btn btn-sm btn-outline-secondary dropdown-toggle fw-bold d-flex align-items-center gap-2"
        data-bs-toggle="dropdown"
      >
        <img src={shipTo.flag} alt={shipTo.name} style={{ height: '20px' }} />
        {shipTo.name}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Urdu', flagPAK)}
          >
            <img src={flagPAK} alt="Urdu" style={{ height: '20px' }} /> Urdu
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Turkish', flagTURKEY)}
          >
            <img src={flagTURKEY} alt="Turkish" style={{ height: '20px' }} /> Turkish
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Korean', flagKOREA)}
          >
            <img src={flagKOREA} alt="Korean" style={{ height: '20px' }} /> Korean
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('English', flagUSD)}
          >
            <img src={flagUSD} alt="English" style={{ height: '20px' }} /> English
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Maori', flagNEWZEALAND)}
          >
            <img src={flagNEWZEALAND} alt="Maori" style={{ height: '20px' }} /> Maori
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center gap-2"
            onClick={() => handleShipToSelect('Chinese', flagCHINA)}
          >
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
