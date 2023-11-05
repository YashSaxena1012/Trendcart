
import React, { useContext } from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const CartItem = ({ item }) => {
  const{removeFromCart,incamount,decamount}=useContext(CartContext);
  const { title, price, amount, image, id } = item;
  return (
    <div>
    <div className=" flex items-center py-4 border-b border-gray-200">
      <div className="w-24 flex-shrink-0 overflow-scroll rounded-md border border-gray-200 mr-4">
       <Link to={`/product/${id}`}>
        <img
          src={image}
          alt="product"
          className="h-full w-full object-cover object-center"
          />
          </Link>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
        <Link to={`/product/${id}`}>
          <h3>
            <a href="#">{title}</a>
          </h3>
          </Link>
          <p className="ml-4">${price*amount}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-md mt-2">
        <div className='flex border-2 gap-5 justify-center items-center'>
        <IoMdRemove onClick={()=>{decamount(id)}}/>
          <p className="text-gray-500">{amount}</p>
        <IoMdAdd onClick={()=>{incamount(id)}}/>
        </div>

          <div className="flex">
            <button
            onClick={()=>{removeFromCart(id)}}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartItem;
