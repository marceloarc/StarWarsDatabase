"use client";
import React, {createContext, useState} from 'react';

import { getProducts,getProduct } from '../api/product/product';

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  function addItemToCart(id:number,quantity:number) {
    let msg:string;
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
 
      if(!item) {
        msg = "Produto adicionado ao carrinho!";
          return [...prevItems, {
              id,
              qty: quantity,
              product,
              totalPrice: product.price 
          }];
         
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty;
              item.totalPrice += product.price;
              msg = "Produto já se encontra no carrinho!";
            }
            return item;
          });
      }
    });
    return msg;
  }

  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  
  
  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}

