import Image from 'next/image';
import React from 'react';

const TopBrands = () => {
    return (
        <div className='my-20'>
             <h2 className="font-bold text-2xl text-center">Top Brands</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='card mx-auto card-body shadow-2xl mt-5'>
                   <Image
                               src="https://cdn.othoba.com/images/thumbs/0553652_realme_100.jpeg"
                               alt="summer vibes"
                               width={100}
                               height={100}
                                unoptimized
                             />
                             <h2 className='font-bold text-green-700 text-center'>realme</h2>
                </div>
                <div className='card mx-auto card-body shadow-2xl mt-5'>
                   <Image
                               src="https://cdn.othoba.com/images/thumbs/0578267_rfl-electronics-ltd_100.jpeg"
                               alt="summer vibes"
                               width={100}
                               height={100}
                                unoptimized
                             />
                              <h2 className='font-bold text-center'>vision</h2>
                </div>
                <div className='card mx-auto card-body shadow-2xl mt-5'>
                   <Image
                               src="https://cdn.othoba.com/images/thumbs/0533592_winner-fashion-shop_100.jpeg"
                               alt="summer vibes"
                               width={100}
                               height={100}
                                unoptimized
                             />
                             <h2 className='font-bold text-red-600 text-center'>winter</h2>
                </div>
                <div className='card mx-auto card-body shadow-2xl mt-5'>
                   <Image
                               src="https://cdn.othoba.com/images/thumbs/0578242_playtime-distribution_100.jpeg"
                               alt="summer vibes"
                               width={100}
                               height={100}
                                unoptimized
                             />
                              <h2 className='font-bold text-center'>playTimeToy</h2>
                </div>
             </div>
        </div>
    );
};

export default TopBrands;