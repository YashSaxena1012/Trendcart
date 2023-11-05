import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from '../contexts/CartContext';

const discount = Math.floor(Math.random() * (60 - 10 + 1)) + 10;

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  const actprice = (price / (1 - discount / 100)).toFixed(2);

  return (
    <div
      key={id}
      className="w-fit p-4 border border-gray-100 rounded-lg bg-white shadow-md hover:scale-105 duration-200 flex flex-col"
    >
      <img className="object-cover h-2/3" src={image} alt="product" />
      <span className="self-start mt-2 ml-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white absolute">
        {discount}% OFF
      </span>
      <div className="flex flex-col flex-grow">
        <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        <h5 className="text-l tracking-tight text-slate-600 capitalize">
          {category}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through">
              ${actprice}
            </span>
          </p>
        </div>
        <div className="flex justify-center gap-8 bottom-1 w-full">
          <button onClick={() => addToCart(product, id)}>
            <BsPlus className="text-4xl hover:rounded-full hover:bg-black hover:text-white rounded-sm hover:shadow-md" />
          </button>
          <Link to={`/product/${id}`}>
            <BsEyeFill className="text-4xl text-red-600 hover:text-red-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
