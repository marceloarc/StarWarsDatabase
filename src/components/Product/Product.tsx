import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Modal } from '../Product/Modal';

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
};

export function ProductC(props: Props) {
  const { addItemToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [msg, setMsg] = useState("");

  function handleAddToCart() {
    setShowModal(true);
    const message = addItemToCart(props.id, 1);
    setMsg(message); 
  }

  return (
    <div className="relative m-6 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-base-100 shadow-md">
      <a className="mx-auto relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-cover mx-3 rounded-xl" width={300} src={props.image} alt="product image" />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-white-900">{props.name}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-white-900">${props.price}</span>
          </p>
          <div className="flex items-center">
            {/* Ícones de avaliação */}
          </div>
        </div>
        <a
          href="#"
          id={`add-to-cart-${props.id}`}
          className="flex items-center justify-center rounded-md bg-sky-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={handleAddToCart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Adicionar ao carrinho
        </a>
      </div>
      {showModal && <Modal title={msg} description={props.name} show={showModal} onClose={() => setShowModal(false)} />}
    </div>
  );
}
