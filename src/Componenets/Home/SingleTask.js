import React, { useState } from 'react';
import CompletedTasks from './CompletedTask';

const SingleTask = (props) => {

    const [change, setChange] = useState(false)

    const handleChange = () => {

        setChange(true)

    }

    return (
        <div className=' w-[50%] mx-auto mt-2 text-white'>

            <div className='grid grid-cols-12  mx-auto mt-2 text-white bg-[#050535] py-2 pl-2  rounded'>

                <input className='col-span-1' type="radio" onChange={handleChange} name="radio-2" class="radio radio-primary" />
                <p className='col-span-6 overflow-auto'>{props?.task}</p>
                <button className='btn btn-xs col-span-2 mr-2'>Edit</button>
                <button className='btn btn-xs col-span-2'>Delete</button>
            </div>


            <div>
                <CompletedTasks change={change} task={props.task}></CompletedTasks>
            </div>

        </div>

    );
};

export default SingleTask;