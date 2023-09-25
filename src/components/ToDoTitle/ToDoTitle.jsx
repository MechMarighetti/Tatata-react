import React from 'react';
import './ToDoTitle.css'

const ToDoTitle = ({children}) => {
    return (
        <h1 className='title'>{children}</h1>
    )
};

export { ToDoTitle };