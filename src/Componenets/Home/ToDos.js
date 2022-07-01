import React, { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import CompletedTasks from './CompletedTask';
import SingleTask from './SingleTask';

const ToDos = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const [task, setTask] = useState()

    const [allTask, setAllTasks] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/alltasks'
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setAllTasks(result)
                console.log(result);
            })
    }, [])



    const onSubmit = async (data) => {

        setTask(data?.task)
        const task = data?.task
        console.log(task);


        const url = 'http://localhost:5000/task'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ task })
        })
            .then(res => res.json())
            .then(result => console.log(result))

    }

    return (
        <div className='py-10 min-h-[60vh]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col mx-auto md:w-96 w-80  ' action="">


                <input
                    type="text" required
                    placeholder="Your Task"
                    className="input input-bordered w-full md:mr-2 max-w-xs"
                    {...register("task")}
                />




                <input className='btn text-white bg-[#050535] md:w-auto w-full max-w-xs mt-5 md:mt-0' type="submit" value="Add Task" />

            </form>

            <div className='mt-20'>
                <h1 className='text-center mb-3 text-[white]'>Created Tasks : </h1>
                {
                    allTask?.map((task) => <SingleTask key={task?._id} task={task}></SingleTask>)
                }

                <CompletedTasks></CompletedTasks>

            </div>

        </div>

    )
};

export default ToDos;