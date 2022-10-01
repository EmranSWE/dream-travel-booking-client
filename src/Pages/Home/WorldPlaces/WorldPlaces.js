import React, { useEffect, useState } from 'react';
import TopPlace from '../topPlace/TopPlace';

const WorldPlaces = () => {
    const [places,setPlaces]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/topplace')
        .then(res =>res.json())
        .then(data => setPlaces(data))
    },[]);
    
    return (
        <div>
           <h3 class='text-center text-4xl my-4 text-blue-800 font-bold'>Top Places</h3>
            <div  class="grid  container  lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {
                places.map(place=><TopPlace
                key={place._id}
                place={place}
                ></TopPlace>)
            }
            </div>
            
        </div>
    );
};

export default WorldPlaces;