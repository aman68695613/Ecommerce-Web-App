// eslint-disable-next-line no-unused-vars
import React from 'react';
import DarkMode from './DarkMode';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa6';

const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop',
  },
  {
    id: 3,
    name: 'About',
    link: '/#about',
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/#blog',
  },
];

const DropdownLinks=[
    {
        id:1,
        name:"Trending",
        link:"/#"
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#"
    },
    {
        id:3,
        name:"Top Rated",
        link:"/#"
    },
    {
        id:4,
        name:"Fresh Arrivals",
        link:"/#"
    },

]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white 
        duration-200 relative z-40 w-full"
    >
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo Section */}
          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="text-white bg-black rounded-xl p-3 font-semibold 
                tracking-widest text-2xl sm:text-3xl"
            >
              <span>Hoe</span>
              <span className='text-black bg-[#ffa31a] rounded-xl'>Stop</span>
            </a>
            {/* Navigation Links */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold 
                        text-gray-500 hover:text-black
                        dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                {/* Dropdown ka animation bana rha */}
                <li className='relative cursor-pointer group'>
                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500
                    dark:hover:text-white py-2'>
                        All
                    <span>
                        <FaCaretDown  className='group-hover:rotate-180
                        duration-300'/>
                    </span>
                    </a>

                {/* Dropdown ke items */}
                    <div className='absolute z-[9999] hidden group-hover:block
                    w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                        <ul className="space-y-2">
                            {
                                DropdownLinks.map((data,index) => (
                                    <li key={index}>
                                        <a 
                                        className='text-gray-500 hover:text-black dark:hover:text-white duration-200
                                        p-2 inline-block w-full hover:bg-primary/20 rounded-md font-semibold'
                                        href={data.link}>
                                            {data.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
              />
              <IoMdSearch
                className="text-xl text-gray-600 group-hover:text-primary 
                  dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
              />
            </div>

            {/* Cart Button */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping
                className="text-xl text-gray-600 
                  dark:text-gray-400"
              />
              <div
                className="w-4 h-4 bg-red-500 text-white 
                  rounded-full absolute top-0 right-0 flex items-center 
                  justify-center text-xs"
              >
                4
              </div>
            </button>

            {/* Dark Mode Toggle */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

