import React from 'react';
import CompletedTask from './CompletedTask';
import ToDos from './ToDos';

const Home = () => {
    return (
        <div className='bg-neutral  pt-20'>
            <ToDos></ToDos>
        </div>
    );
};

export default Home;