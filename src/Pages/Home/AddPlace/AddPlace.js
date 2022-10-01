import React from 'react';
import { useForm } from "react-hook-form";
const AddPlace = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
       
        fetch('http://localhost:5000/topplace/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            console.log(data)
     };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Add Service</h2>

            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 mb-2' placeholder='Name' {...register("name")} />
                <input className='border-2 mb-2' placeholder='Country'{...register("country")} />
                <input className='border-2 mb-2' placeholder='About'{...register("about")} />
                <input className='border-2 mb-2' placeholder='img' {...register("img", { required: true })} />
                <input className='bg-blue-500' type="submit" value='Add Place' />
            </form>
        </div>
    );
};

export default AddPlace;