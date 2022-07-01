import React, { useEffect, useState } from 'react';

const CompletedTasks = () => {


    const [allTask, setAllTasks] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/completed-tasks'
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setAllTasks(result)
                console.log(result);
            })
    }, [])
   

    return (
        <div className="collapse collapse-arrow border-b-2 mt-10 bg-[#050535] mx-auto md:w-96 w-80 ">
                <input type="checkbox" />
                <div className="collapse-title text-[white] font-semibold   ">
                    Completed Tasks
                </div>
                <div className="collapse-content">

                    {
                        allTask.map(task=><p className='line-through text-[white]'>{task?.task}</p>)
                       
                    }
                </div>
            </div>
    );
};

export default CompletedTasks;