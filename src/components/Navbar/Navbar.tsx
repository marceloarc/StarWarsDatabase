"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';

import { CartContext } from '../../context/CartContext'
export function Navbar() {
  const { getItemsCount, getTotalPrice } = useContext(CartContext);

  return (<div className="navbar bg-zinc-950 border-b border-gray-500">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-950  w-52 ">
          <li><Link href="/">INICIO</Link></li>
          <li>
            <a>INFORMAÇÕES</a>
            <ul className="p-2">
              <li><Link href="/people">PERSONAGENS</Link></li>
            </ul>
          </li>
          <li><Link href="/products">PRODUTOS</Link></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl mb-3"><Image
        src={logo}
        width={100}
        height={80}
        alt="Picture of the author"
      /></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 bg-zinc-950">
        <li><Link href="/">INICIO</Link></li>
        <li>
          <details>
            <summary>INFORMAÇÕES</summary>
            <ul className="p-2  z-50 bg-zinc-950 border-x border-b border-gray-500 rounded-none">
              <li><Link href="/people">PERSONAGENS</Link></li>
            </ul>
          </details>
        </li>
        <li><Link href="/products">PRODUTOS</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">{getItemsCount()}</span>
          </div>
        </div>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-zinc-950 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{getItemsCount()} Items</span>
            <span className="text-info">Subtotal: {getTotalPrice().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <div className="card-actions">
              <button className="btn bg-yellow-400 text-black btn-warning">Ver Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

}