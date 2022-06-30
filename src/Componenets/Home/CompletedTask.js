import React, { useState } from 'react';

const CompletedTasks = (props) => {
   

    return (
        <div className="collapse collapse-arrow border-b-2 mt-10 bg-[#050535]">
                <input type="checkbox" />
                <div className="collapse-title text-normal font-semibold   ">
                    Completed Tasks
                </div>
                <div className="collapse-content">

                    {
                        props?.change && <p className='line-through text-[white]'>{props?.task}</p>
                    }
                </div>
            </div>
    );
};

export default CompletedTasks;