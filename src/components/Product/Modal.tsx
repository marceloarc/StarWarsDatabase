"use client";
import { useEffect, useState } from 'react';
import {ProductC} from './Product';
import logo from '../../../public/images/logo.png';
import {Product} from '../../api/product/types';
import { getProducts } from '../../api/product/product';


type Props = {
  title: string;
  description: string;
  show: boolean;
  onClose: () => void;
};
  export function Modal(props: Props){
    const showHideClassName = props.show ? "modal" : "modal hidden";
    if (!props.show) {
      return null;
    }
    return(
    <dialog id="my_modal_3" className={showHideClassName} open={props.show}>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={props.onClose}>✕</button>
        </form>
        <h3 className="font-bold text-lg">{props.title}</h3>
        <p className="py-4">{props.description}</p>
      </div>
    </dialog>

    );

  }