/* eslint-disable react/display-name */
import AOS from 'aos';
// eslint-disable-next-line no-unused-vars
import React, { forwardRef, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
const FooterLinks = [
    {
    title: "Home",
    link: "/#",
    },
    {
    title: "About",
    link: "/#about",
    },
    {
    title: "Contact",
    link: "/#contact",
    },
    {
    title: "Blog",
    link: "/#blog",
    },
];
const ImportantLinks = [
    {
    title: "ContactUs",
    link: "/#ContactUs",
    },
    {
    title: "Reviews",
    link: "/#Reviews",
    },
    {
    title: "Tracking",
    link: "/#Tracking",
    },
    {
    title: "KnowUs",
    link: "/#Tracking",
    },
];
const Footer = forwardRef((props,ref) => {
    useEffect(() => {
        AOS.refresh(); // Manually refresh AOS after the component renders
      }, []); // Add dependencies as necessary to re-trigger AOS refresh
  return (
    <div className='dark:bg-gray-950' ref={ref}>
      <div className='container'>
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* company details */}
            <div className='py-8 px-4 text-left'>
               <a 
               href="#"
               className='font-semibold tracking-widest text-2xl sm:text-3xl bg-black p-3 rounded-xl'
               >
                <span className='text-white pl-2'>Hoe</span>
                <span className='text-black bg-[#ffa31a] rounded-xl'>Stop</span>
               </a>
               <p className='text-gray-600 dark:text-white/70  lg:pr-24 pt-3 m-3 text-left' >
               Join millions of happy customers and elevate your shopping experience today here convenience meets quality!
               </p>
               <p className='text-gray-500 mt-4 text-left ml-2'>Made with 💖 by The HoeStop</p>
               <a 
               href="https://github.com/horidianx69"

               target="_blank"
               
               className="inline-block bg-[#ffa31a] font-bold text-black dark:text-white
               py-2 px-4 mt-4 text-sm rounded-xl ">
                    Visit our GitHub.
               </a>
            </div>
            {/*Footer links*/ }
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <span className='text-l font-bold sm:text-left bg-[#ffa31a] p-2 rounded-xl'>Important Links</span>
                    <ul className="space-y-3 mt-5">
                        {
                            ImportantLinks.map(
                                (data,index)=>(
                                    <li key={index}>
                                        <a 
                                        href={data.link}
                                        className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                                        >
                                             {data.title}
                                        </a>
                                    </li>
                                )
                            )

                        }
                    </ul>
                </div>
                {/*second cols links*/}
                <div className='py-8 px-4'>
                    <span className='text-l font-bold sm:text-left bg-[#ffa31a]  p-2 rounded-xl'>Quick Links</span>
                    <ul className="space-y-3 mt-5">
                        {
                            FooterLinks.map(
                                (data,index)=>(
                                    <li key={index}>
                                        <a 
                                        href={data.link}
                                        className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 '
                                        >
                                             {data.title}
                                        </a>
                                    </li>
                                )
                            )

                        }
                    </ul>
                </div>
                {/* Company Address */}
                <div className='py-8 px-4 col-span-2 sm:col-auto '>
                    <span className='text-l font-bold sm:text-left bg-[#ffa31a] p-2 rounded-xl block'>
                    Address
                    </span>
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <FaLocationArrow/>
                            <p>Noida,Uttar Pradesh</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt/>
                                <p>+91 123456789</p>
                        </div> 
                        <div>
                            {/* social links */}
                            <div className="flex items-center gap-3 mt-6">
                               <a href="https://www.instagram.com/">
                                  <FaInstagram className="text-3xl hover:text-[#ffa31a] duration-300"/>
                                </a>
                                <a href="https://www.facebook.com/login.php/">
                                  <FaFacebook className="text-3xl hover:text-[#ffa31a] duration-300"/>
                                </a> 
                                <a href="https://www.linkedin.com/login/in">
                                  <FaLinkedin className="text-3xl hover:text-[#ffa31a] duration-300"/>
                                </a>  
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
})

export default Footer
