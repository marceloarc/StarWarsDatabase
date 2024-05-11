"use client";
import { useEffect, useState } from 'react';
import {ProductC} from '../../components/Product/Product';
import logo from '../../../public/images/logo.png';
import {Product} from '../../api/product/types';
import { getProducts } from '../../api/product/product';

  export function Products(){
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const products = getProducts
          setProducts(products);
        };    
        fetchData();    
      }, []);
    
    
    return(
     
        <div className="flex flex-wrap -m-4 mx-auto content-center">
                {products.map(product => {
                return (
                    <ProductC
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                    description={product.description}
                    />
                );
                })}
        </div>
    );

  }