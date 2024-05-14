"use client"
import React, { createContext, useState } from 'react';
import { getProduct } from '../api/product/product';
import { Product } from '../api/product/types';

// Define o tipo para os dados no contexto
interface CartContextData {
  items: {
    id: number;
    qty: number;
    product: Product;
    totalPrice: number;
  }[];
  setItems: React.Dispatch<React.SetStateAction<{
    id: number;
    qty: number;
    product: Product;
    totalPrice: number;
  }[]>>;
  getItemsCount: () => number;
  addItemToCart: (id: number, quantity: number) => string;
  getTotalPrice: () => number;
}

export const CartContext = createContext<CartContextData>({
  items: [],
  setItems: () => {},
  getItemsCount: () => 0,
  addItemToCart: () => '',
  getTotalPrice: () => 0,
});

export function CartProvider(props: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartContextData['items']>([]);

  async function addItemToCart(id: number, quantity: number): Promise<string> {
    let msg: string = '';
    const product = await getProduct(id); // Lidar com a Promise de forma assíncrona
    setItems(prevItems => {
      const item = prevItems.find(item => item.id === id);

      if (!item) {
        msg = 'Produto adicionado ao carrinho!';
        return [
          ...prevItems,
          {
            id,
            qty: quantity,
            product,
            totalPrice: product.price * quantity,
          },
        ];
      } else {
        msg = 'Produto já se encontra no carrinho!';
        return prevItems.map(item => {
          if (item.id === id) {
            item.qty += quantity;
            item.totalPrice += product.price * quantity;
          }
          return item;
        });
      }
    });
    return msg;
  }

  function getItemsCount(): number {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice(): number {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, setItems, getItemsCount, addItemToCart, getTotalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
}