import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { quantity } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? 'bg-zinc-900' : 'bg-zinc-100'
      } flex fixed w-full transition-all z-10 duration-500`}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to={'/'}>
          <div className="flex items-center">
            <img
              src={Logo}
              className="w-16  h-16 mr-2 -ml-8 sm:w-12 sm:h-12"
              alt="TRENDCART"
            />
            <span className={`${isActive?'text-white':'text-black'} font-bold text-xl sm:text-2xl`}>
              TRENDCART
            </span>
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center"
        >
          <BsBag className={`text-3xl ${isActive?'text-white':'text-black'}`} />
            <div className="bg-red-400 text-gray-200 -ml-2 text-xl p-2 w-6 mt-4 h-6 z-10  rounded-full flex items-center justify-center">
              {quantity}
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
