import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';

const Package = () => {
    const [packages,setPackages]=useState([]);
    
    useEffect(()=>{
        fetch("packages.json")
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    return (
        <div id='package'>
            <h3 class='text-center text-4xl my-4 text-blue-800 font-bold'>Our Popular Package</h3>
            <div  class="grid  container  lg:grid-cols-3  gap-5 sm:grid-cols-2 "> 
            {
                packages.map(pack =>  <SinglePackage key ={pack.id} pack={pack}></SinglePackage>)
            }
            </div>
         
        </div>
    );
};

export default Package;