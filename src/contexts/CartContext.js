import React,{createContext,useState,useEffect} from 'react';

export const CartContext=createContext();
const CartProvider = ({children}) => {
  const [cart,setCart]=useState([]);
  const [quantity,setQuantity]=useState(0);  
  
  useEffect(()=>{
    if(cart){
      const amount=cart.reduce((accumulator,currentItem)=>{
        return accumulator+currentItem.amount;
      },0);
      setQuantity(amount);
    }
  },[cart])

  const addToCart=(product,id)=>{
    const newItem={...product,amount: 1}
    const cartItem=cart.find(item=>{
      return item.id===id;
    });
    if(cartItem){
      const newCart=[...cart].map(item=>{
        if(item,id===id){
          return {...item,amount:cartItem.amount+1}
        }
        else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart,newItem]);
    }
  };
  
  const removeFromCart=(id)=>{
    const newCart=cart.filter(item=>{
      return item.id!==id
    });
    setCart(newCart)
  }
  
  const clearCart=()=>{
    setCart([]);
  }
  
  const incamount=(id)=>{
    const cartItem=cart.find(item=>{
      return item.id===id
    })
    addToCart(cartItem,id);
  }

  const decamount=(id)=>{
    const cartItem=cart.find(item=>{
      return item.id===id
    })
    if(cartItem){
      const newCart=cart.map(item=>{
        if(item.id===id){
          return {...item,amount:cartItem.amount-1};
        }
        else return item;
      })
      setCart(newCart);
    }
        if(cartItem.amount<2){
          removeFromCart(id);
        }
        else if(cartItem.amount<1) clearCart();
      }
  return <CartContext.Provider value={{quantity,cart,addToCart,removeFromCart,clearCart,incamount,decamount}}>{children}</CartContext.Provider>
};

export default CartProvider;
