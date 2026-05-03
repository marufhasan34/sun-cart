import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({product}) => {
    return (
        <div className='card card-body shadow-2xl'>
            <div className='relative w-full aspect-square'>
                <Image className='rounded-xl object-cover' src={product.image} alt={product.name} fill />
            </div>
            <h3 className='font-bold text-xl text-center'>{product.name}</h3>
            <div className='flex my-1 font-semibold px-3 justify-between fon-semibold'>
                <p>rating : </p>
                <p className='flex items-center gap-2'><FaStar className='text-amber-500' /> {product.rating}</p>
            </div>
            <div className='flex  font-semibold px-3 justify-between fon-semibold'>
                <p>Price : </p>
                <p className='flex items-center gap-2'> <span>$ {product.price}</span></p>
            </div>
            <button className='w-full cursor-pointer hover:bg-cyan-950 hover:text-white bg-yellow-400 rounded-2xl py-1 transition my-2'>View Details</button>
        </div>
    );
};

export default ProductCard;