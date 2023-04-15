import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
 
    
    return (
        <div className='px-6'>
            <h1>This is Home component</h1>
        </div>
    );
};

export default Home;