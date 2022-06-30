import React from 'react';
import CompletedTasks from './CompletedTasks';
import ToDos from './ToDos';

const Home = () => {
    return (
        <div className='bg-neutral h-[100vh] pt-20'>
            <ToDos></ToDos>
            <CompletedTasks></CompletedTasks>
        </div>
    );
};

export default Home;