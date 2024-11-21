

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import './App.css'
import Footer from './components/Footer/Footer.jsx';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import Partners from "./components/Partners/Partners.jsx"
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from "./assets/hero/headphone.png"
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Products from './components/Products/Products';
import Popup from './components/Popup/Popup.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
// import Button from './components/Shared/Button.jsx';



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
const BannerData2={
    discount: "30% OFF",
    title: "Happy Hours",
    date: "14 Jan to 28 Jan",
    image: smartwatch2,
    title2: "Smart Solo ",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#2dcc6f"
    }

function App() {
  useEffect( () => {
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  }, [])
  
  const [orderPopup, setOrderPopup]=React.useState(false);
  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  }  
  useEffect(()=>{
    AOS.init({
      duration: 800,
      easing:'ease-in-sine',
      delay:100,
      offset:100,
    
    });
    AOS.refresh()
  },[])
  const blog = useRef(null);
  const about = useRef(null);
  const home = useRef(null);
  const shop = useRef(null);
  const handleScrollTo = (section) => {
    if (section === "blog") {
      blog.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about") {
      about.current.scrollIntoView({ behavior: "smooth" });
    }else if (section === "home") {
      home.current.scrollIntoView({ behavior: "smooth" });
    }else if (section === "shop") {
      shop.current.scrollIntoView({ behavior: "smooth" });
    }  
      
  
  };
  return (
    <>
    <div  className=' bg-white dark:bg-gray-900 dark:text-white duration-200 h-[540vh]'>
    <Navbar handleOrderPopup={handleOrderPopup} handleScrollTo={handleScrollTo}  />
    <Hero  ref={home} handleOrderPopup={handleOrderPopup}/>
     <Category/>
     <Category2/>
     <Services/>
     <Banner  ref={shop} data={BannerData}/>
     <Products/>
     <Banner data={BannerData2}/>
     <Blogs  ref={blog}/>
     <Partners/>
     <Footer  ref={about} />
     <Popup orderPopup={orderPopup}
     handleOrderPopup={handleOrderPopup}/>
    </div>
    </>
  )
}

export default App
