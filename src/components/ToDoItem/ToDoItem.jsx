import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ id, title, isChecked, isCompleted, tasks, onDelete = () => {}, onComplete = () => {}, onEdit = () => {}, onChecked = () => {}}) => {
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
    
    // Funcion para editar una tarea
    const handleEdit = (param) => {
        const index = findIndex(param);
        // Investigar como cambiar desde el li
        let newTitle = prompt('Edita la tarea desde aca');
        // Eliminando el error que muestra la consola si se cancela el prompt -> consular sobre esto en clases
        if(newTitle) {
            // Comprobando si el nuevo titulo de la tarea esta repetido
            const hasTask = newTasks.find(task => task.title.toLowerCase().replace(/ /g, "") === newTitle.toLowerCase().replace(/ /g, ""));
            // Si el nuevo titulo de la tarea esta repetido enviamos una alerta (cambiar a un mensaje personalizado); sino, se encarga de actualizar la lista con el nuevo titulo
            if(!hasTask) {
                newTasks[index].title = newTitle;
                onEdit(newTasks);
            } else alert('tarea repetida');
        };
    };

    // Funcion para manejar el cambio del checkbox
    const handleCheckbox = (param) => {
        const index = findIndex(param);
        newTasks[index].isChecked ? newTasks[index].isChecked = false : newTasks[index].isChecked = true;
        onChecked(newTasks);
    };

    return (
        <div className="list__item">
            <input className="item__checkbox" type="checkbox" name={title} id={id} checked={isChecked} onChange={() => handleCheckbox(id)} />
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