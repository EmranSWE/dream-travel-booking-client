import React from 'react';
import usePlaces from '../../../hooks/usePlaces';

const ManageTopPlace = () => {
   const [topPlace,setTopPlace]=usePlaces();

    //handle delete
    const handleDelete = id =>{
        const proceed =window.confirm('Are you sure?');
        if(proceed){
            const url =`http://localhost:5000/topplace/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data => console.log(data))
            const remaining=topPlace.filter(places => places._id !==id);
            setTopPlace(remaining);
        }
    }
    return (
        <div className='mx-auto w-50'>
        <h2>Manage Your services</h2> 
        {
         topPlace.map(places =>
              <div key={places._id}>
                 <h5>{places.name} <button>Update</button> <button onClick={()=>handleDelete(places._id)}>X</button> </h5>
              </div>)
        }
     </div>
    );
};

export default ManageTopPlace;