import React from 'react';
import './ToDoList.css';

const ToDoList = ({/* children */ tasks, renderTask = () => {}}) => {
    return (
        <section>
            <ul className='list'>
                {tasks.map(task => renderTask(task))}
            </ul>
        </section>
    )
};

export { ToDoList };