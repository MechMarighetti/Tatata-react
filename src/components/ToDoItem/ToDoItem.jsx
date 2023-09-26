import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ id, title, /* isChecked */ isCompleted, tasks, onDelete = () => {}, onComplete = () => {}}) => {
    const newTasks = [...tasks];

    // Encuentra el indice de la tarea dentro del nuevo array
    const findIndex = (param) => {
        return newTasks.findIndex(task => task.id == param);
    };
    
    // Funcion para devolver un nuevo array eliminando el elemento donde se hace el click
    const handleDelete = (param) => {
        const index = findIndex(param);
        newTasks.splice(index, 1);
        onDelete(newTasks);
    };
    
    // Funcion para devolver un nuevo array modificando la propiedad isCompleted de la tarea donde se dio click
    const handleComplete = (param) => {
        const index = findIndex(param);
        newTasks[index].isCompleted = true;
        onComplete(newTasks);
    };

    return (
        <div className="list__item">
            <input className="item__checkbox" type="checkbox" name={title} id={id} /* checked={isChecked} onChange={() => handleCheckbox(id)} */ />
            <li className={isCompleted ? "item__text completed" : "item__text"}>{title}</li>
            {<div className="btn__section">
                <button className="item__btn item__btn--complete" onClick={() => handleComplete(id)}>&#10004;</button>
                {/* <button className="item__btn item__btn--edit" onClick={() => handleEdit(title)}>&#9998;</button> */}
                <button className="item__btn item__btn--delete" onClick={() => handleDelete(id)}>&#10006;</button>
            </div>}
        </div>      
    )
};

export { ToDoItem };