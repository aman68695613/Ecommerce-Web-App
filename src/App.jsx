/* eslint-disable react/prop-types */

import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners.jsx"
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';

import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from "./assets/hero/headphone.png"
import Products from './components/Products/Products';
import Popup from './components/Popup/Popup.jsx';
const BannerData={
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#f42c37"
    }

function App() {
  const [orderPopup, setOrderPopup]=React.useState(false);
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  }  

  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
     <Navbar handleOrderPopup={handleOrderPopup}/>
     <Hero handleOrderPopup={handleOrderPopup}>
     <Category/>
     <Category2/>
     <Services/>
     <Banner data={BannerData}/>
     <Products/>
     <Partners/>
     <Footer />
     <Popup orderPopup={orderPopup}
     setOrderPopup={setorderPopup}/>
    </div>
    </>
  )
}

export default App
