import React, { useState } from 'react';
import './ToDoItem.css';

const ToDoItem = ({ id, title, isChecked, isCompleted, tasks, onChecked = (data) => {}, onCompleted = (data) => {}, onEdited = (data) => {}, onDeleted = (data) => {}}) => {
    const [checkbox, setCheckbox] = useState(isChecked);
    const newTasks = [...tasks];
    // Encuentra el indice de la tarea dentro del nuevo array
    const findIndex = (param) => newTasks.findIndex(task => task.id == param);
    // Funcion para manejar el cambio del checkbox
    const handleCheckbox = (param) => {
        checkbox ? setCheckbox(false) : setCheckbox(true);
        const index = findIndex(param);
        newTasks[index].isChecked ? newTasks[index].isChecked = false : newTasks[index].isChecked = true;
        onChecked(newTasks);
    };
    // Devuelve un array con la propiedad "isCompleted" modificada, donde se dio click
    const handleComplete = (param) => {
        const index = findIndex(param);
        newTasks[index].isCompleted = true;
        onCompleted(newTasks);
    };
    // Edita el titulo de la tarea donde se dio click
    const handleEdit = (param) => {
        const index = findIndex(param);
        // Investigar como cambiar desde el li
        let newTitle = prompt('Edita la tarea desde aca');
        // Eliminando el error que muestra la consola si se cancela el prompt -> consular sobre esto en clases
        if(newTitle) {
            // Comprobando si el nuevo titulo de la tarea esta repetido
            const hasTask = newTasks.find(task => task.title.toLowerCase().replace(/ /g, "") === newTitle.toLowerCase().replace(/ /g, ""));
            // Si el nuevo titulo de la tarea esta repetido enviamos una alerta (cambiar a un mensaje personalizado)
            if(!hasTask) {
                newTasks[index].title = newTitle;
                onEdited(newTasks);
            } else alert('tarea repetida');
        };
    };
    // Devuelve un array eliminando el elemento donde se hace el click
    const handleDelete = (param) => {
        const index = findIndex(param);
        newTasks.splice(index, 1);
        onDeleted(newTasks);
    };
    return (
        <div className="list__item">
            <input className="item__checkbox" type="checkbox" name={title} id={id} checked={checkbox} onChange={() => handleCheckbox(id)} />
            <li className={isCompleted ? "item__text completed" : "item__text"}>{title}</li>
            {<div className="btn__section">
                <button className="item__btn item__btn--complete" onClick={() => handleComplete(id)}>&#10004;</button>
                <button className="item__btn item__btn--edit" onClick={() => handleEdit(id)}>&#9998;</button>
                <button className="item__btn item__btn--delete" onClick={() => handleDelete(id)}>&#10006;</button>
            </div>}
        </div>      
    )
};

export { ToDoItem };