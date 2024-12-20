/* eslint-disable react/display-name */
// eslint-disable-next-line no-unused-vars
import React, { forwardRef } from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/hero/watch.png";
import Image3 from "../../assets/category/vr.png";
import Image4 from "../../assets/category/macbook.png";
import Button from "../Shared/Button"

const HeroData=[
    {
        id:1,
        img: Image1,
        subtitle:"Beats Solo",
        title:"Wireless",
        title2:"Headphone",
        description:
        "Kuch toh hai crazy sa"
    },
    {
        id:2,
        img: Image2,
        subtitle:"Titan",
        title:"Smart",
        title2:"Watch",
        description:
        "Kuch toh hai crazy sa"
    },
    {
        id:3,
        img: Image3,
        subtitle:"Sony",
        title:"Wireless",
        title2:"Virtual Reality",
        description:
        "Kuch toh hai crazy sa"
    },
    {
        id:4,
        img: Image4,
        subtitle:"Apple",
        title:"Macbook",
        title2:"Laptop",
        description:
        "Kuch toh hai crazy sa"
    },

]



const Hero = forwardRef(({handleOrderPopup},ref) => {

    const settings = {
        dots: true,
        arrows:true,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        cssEase: "ease-in-out",
        pauseOnHover:true,
        pauseOnFocus:true,
      };
    

  return (
    <div className='container' ref={ref}>
        <div className='overflow-hidden rounded-3xl min-h-[550px]
        sm:min-h-[650px] hero-bg-color flex justify-center items-center'>

            <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {HeroData.map((data)=>(
                        <div key={data.id}>
                           <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className='flex flex-col justify-center
                            gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1
                                data-aos="zoom-out" 
                                data-aos-duration="500" 
                                data-aos-once="true" 
                                className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                <h1 
                                 data-aos="zoom-out" 
                                 data-aos-duration="500" 
                                 data-aos-once="true"
                                className='text-5xl sem:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                <h1
                                 data-aos="zoom-out" 
                                 data-aos-duration="500" 
                                 data-aos-once="true" 
                                className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                <div
                                 data-aos="fade-up" 
                                 data-aos-duration="500" 
                                data-aos-delay='300'
                                 data-aos-offset='0'

                                >
                                    <Button  
                                    text="Shop Now" 
                                    bgColor="bg-primary"
                                    textColor="text-white" 
                                    handler={handleOrderPopup} 
                                    />
                                </div>
                            </div>
                                <div className='order-1 sm:order-2'>
                                    <div
                                     data-aos="zoom-in"  
                                     data-aos-once="true" 
                                     className='relative z-10'
                                    
                                    >
                                        <img src={data.img} alt="" 
                                        className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]
                                        sm:scale-105 lg:scale-110 object-contain mx-auto
                                        drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4) relative z-40' />
                                    </div>
                                </div>
                           </div> 
                        </div>
                ))
                }
            </Slider>
            </div>
        </div>
    </div>
  );
})

export default Hero
