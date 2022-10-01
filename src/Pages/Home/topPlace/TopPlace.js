import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopPlace = ({place}) => {
    const {_id,name,img,about,country}=place;
    const navigate=useNavigate()
    const handleSinglePlaceNavigate = id =>{
        navigate(`topplace/${id}`)
    }
    return (
        <div id='topplace'>
            <div className='border-4 border-gray-200 border-r-indigo-500'>
            <img src={img} alt="" />
            <h2 className='text-center'>{name}</h2>
            <p className='text-center'>{about}</p>
            <button onClick={()=>handleSinglePlaceNavigate(_id)} className='p-1 text-x mb-2 ms-2 bg-blue-500 text-white font-bold rounded-full'>Go to {country} </button>
            </div>
        </div>
    );
};

export default TopPlace;