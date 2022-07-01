import React, { useState } from 'react';
import CompletedTasks from './CompletedTask';
import EdiText from 'react-editext'

const SingleTask = (props) => {

    const [savedTask, setSavedTask] = useState()

    const handleChange = (e, setFn) => {
        setFn(e.target.value);
    };

    const handleSave = ({ name, value, previousValue }) => {
        alert(name + ' saved as: ' + value + ' (prev: ' + previousValue + ')');
    };



    const handleChange2 = () => {
        const task = props?.task?.task
        console.log(task);

        const url = 'http://localhost:5000/completed-task'
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


    const onCancel = val => {
        console.log('Cancelled-> ', val)



    }

    const onEditStart = (val) => {
        console.log('EDITING STARTED: ', val)

           
    }

    const onSave = val => {
        console.log('on Save: ', val)
        setSavedTask(val)

        const url = `http://localhost:5000/edited-task/${props?.task?._id}`
        console.log(props?.task?._id,"ind");
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({val})
        })
            .then(res => res.json())
            .then(result => console.log( result))

    }

    return (
        <div className=' w-[50%] mx-auto mt-2 text-white    '>

            <div className='grid grid-cols-12  mx-auto mt-2 text-white  bg-[#050535] py-2 pl-2  rounded'>

                <input className='col-span-1' type="radio" onChange={handleChange2} class="radio radio-primary" />

                <EdiText className='col-span-9 bg-[white] text-[black]'
                    type='text'
                    onCancel={onCancel}
                    onEditingStart={onEditStart}
                    onSave={onSave}
                    value={props?.task?.task}
                />

            </div>








        </div>

    );
};

export default SingleTask;