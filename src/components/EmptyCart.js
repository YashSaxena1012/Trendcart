import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';

const EmptyCartCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
        <FiShoppingCart className="text-indigo-500 text-4xl text-center" />
      </div>
      <h3 className="text-xl font-medium mb-2">Your Cart is Empty</h3>
      <p className="text-gray-500">Start adding items to your cart.</p>
    </div>
  );
};

export default EmptyCartCard;
