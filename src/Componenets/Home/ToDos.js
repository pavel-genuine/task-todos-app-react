import React from 'react';
import { useForm } from "react-hook-form";

const ToDos = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();





    const onSubmit = async (data) => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col mx-auto md:w-96 w-80  ' action="">
                
                   
                    <input
                        type="text" required
                        placeholder="Your Task"
                        className="input input-bordered w-full md:mr-2 max-w-xs"
                        {...register("task")}
                    />

              
                <input className='btn text-white bg-[#050535] md:w-auto w-full max-w-xs mt-5 md:mt-0' type="submit" value="Add Task" />

            </form>
        </div>
    );
};

export default ToDos;