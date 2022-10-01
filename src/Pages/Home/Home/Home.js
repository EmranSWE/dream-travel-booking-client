import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Package from '../../Package/Package';
import Banner from '../Banner/Banner';
import PopularPlaces from '../PopularPlaces/PopularPlaces';
import WorldPlaces from '../WorldPlaces/WorldPlaces';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
        
            <Banner></Banner>
            <WorldPlaces></WorldPlaces>
            <PopularPlaces></PopularPlaces>
            <Package></Package>
        <p className='p-4'><small>{user?.email}</small></p>
        </div>
    );
};

export default Home;