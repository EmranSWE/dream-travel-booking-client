import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePlace = () => {
    const { id } = useParams();
    const [place, setPlace] = useState({});
    const url = `http://localhost:5000/topplace/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setPlace(data))

    return (
        <div>
            <h1>Single place:{place.name}</h1>
            <h1>Single place:{place.country}</h1>
        </div>
    );
};

export default SinglePlace;