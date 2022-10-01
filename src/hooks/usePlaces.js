import { useEffect } from 'react';
import { useState } from 'react';

const usePlaces = () => {
    const [topPlace,setTopPlace]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/topplace')
        .then(res =>res.json())
        .then(data =>setTopPlace(data))
    },[]);

    return [topPlace,setTopPlace]
};

export default usePlaces;