import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext';
import EmptyCartCard from './EmptyCart';

const Sidebar = () => {
  const {isOpen,handleClose}=useContext(SidebarContext);
    const {cart,clearCart}=useContext(CartContext);
    const totprice = cart.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);

    return (
  <div className={`${isOpen?'right-0':'-right-full' } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw]
  xl:max-w-[33vw] transition-all duration-300 z-20 px-4 overflow-scroll
  lg:px-[38px]`}>
    <div className='flex items-center justify-between border-b py-6'>
      <div className='uppercase text-md font-semibold'>Shopping Cart</div>
      <div onClick={handleClose} className='w-8 h-8 flex justify-center items-center cursor-pointer'>
        <IoMdArrowForward className='text-2xl'/>
      </div>
    </div>
    <div>{cart.map((item)=>{
      return(
       <CartItem item={item} key={item.id} />
    )})}
    </div>
    {
      totprice?
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${totprice.toFixed(2)}</p>
              <button onClick={()=>{clearCart()}} className=' text-2xl'>
                <FiTrash2 className=' text-red-600 hover:scale-125'/>
              </button>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or &nbsp;
                  <button type="button" onClick={handleClose} className="font-medium text-indigo-600 hover:text-indigo-500">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
   :<EmptyCartCard/>
    }
  </div>
)};

export default Sidebar;
