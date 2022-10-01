import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = ({pack}) => {
    const {img,name,country,prices}=pack
    return (
        <div>
        <div className='border-4 border-gray-200 border-r-indigo-500'>
        <img src={img} alt="" />
        <h2 className='text-center'>{name}</h2>
        <p className='text-center'>{country}</p>
        <div className='flex items-center justify-between mx-5'>
        <p className='text-4xl text-blue-500 font-bold'>${prices}</p>
        <button className=' ms-2 bg-blue-500  font-bold rounded-full'><Link className='p-4 text-xl mb-2 text-white no-underline' to='/about'>View Details</Link>   </button>
        </div>
        </div>
    </div>
    );
};

export default SinglePackage;