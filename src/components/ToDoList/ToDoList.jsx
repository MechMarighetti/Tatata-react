import React from 'react';
import './ToDoList.css';

const ToDoList = ({children}) => {
    return (
        <section>
            <ul className='list'>{children}</ul>
        </section>
    )
};

export { ToDoList };