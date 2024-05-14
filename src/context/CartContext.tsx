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
  addItemToCart: (id: number, quantity: number) => Promise<string>;
  getTotalPrice: () => number;
}

export const CartContext = createContext<CartContextData>({
  items: [],
  setItems: () => {},
  getItemsCount: () => 0,
  addItemToCart: async () => '',
  getTotalPrice: () => 0,
});

export function CartProvider(props: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartContextData['items']>([]);

 async function addItemToCart(id: number, quantity: number): Promise<string> {
    let msg: string = '';
    const product = await getProduct(id);
    setItems(prevItems => {
      const updatedItems = [...prevItems]; // Criar uma cópia dos itens anteriores
      const itemIndex = updatedItems.findIndex(item => item.id === id);

      if (itemIndex === -1) {
        msg = 'Produto adicionado ao carrinho!';
        updatedItems.push({
          id,
          qty: quantity,
          product: product!,
          totalPrice: product!.price * quantity,
        });
      } else {
        msg = 'Produto já se encontra no carrinho!';
        const updatedItem = { ...updatedItems[itemIndex] };
        updatedItem.qty += quantity;
        updatedItem.totalPrice += product!.price * quantity;
        updatedItems[itemIndex] = updatedItem;
      }

      return updatedItems;
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