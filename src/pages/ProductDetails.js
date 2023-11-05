import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {CartContext} from'../contexts/CartContext';
import {ProductContext} from'../contexts/ProductContext';
import {BiArrowBack} from 'react-icons/bi'
const ProductDetails = () => {
  const {id}=useParams();
  const {addToCart}=useContext(CartContext);
  const {products}=useContext(ProductContext);
  const product=products.find(item=>{
    return item.id===parseInt(id);
  })
if(!product){
  return <section className='text-5xl h-screen flex justify-center items-center'>LOADING....</section>
}
const {title,description,image,rating,price}=product;
  return <>
  <div className={`min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative`}>
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <Link to={'/'}>
                      <BiArrowBack className='text-3xl'/>
                    </Link>
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={image} className="w-full relative" alt=""/>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{title}</h1>
                    <p className="text-sm uppercase">{description}</p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">$</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{price}</span>
                        
                    </div>
                    <div className="inline-block align-bottom">
                        <button onClick={()=>{addToCart(product,id)}} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  </>;
};

export default ProductDetails;
