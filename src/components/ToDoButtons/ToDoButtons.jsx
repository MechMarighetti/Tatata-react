import React from 'react';
import './ToDoButtons.css'

const ToDoButtons = ({ tasks, onCompleted = (data) => {}, onDeleted = (data) => {}, completeSelection }) => {
    const newTasks =[...tasks];
    // Funcion para actualizar a completada un grupo de tareas
    const handleComplete = () => {
        // Guardando las tareas seleccionadas
        const tasksSelected = newTasks.filter(task => task.isChecked === true);
        // Guardando los id de cada tarea seleccionada
        const tasksID = tasksSelected.map(task => newTasks.indexOf(task));
        // Cambiando a "true" la key "isCompleted" de las tareas seleccionadas
        tasksID.forEach(id => newTasks[id].isCompleted = true);
        onCompleted(newTasks);
    };
    // Funcion para eliminar un grupo de tareas seleccionadas
    const handleDelete = () => {
        // Filtrando tareas que tengan el checkbox desactivado
        const remainingTasks = newTasks.filter(task => task.isChecked == false);
        onDeleted(remainingTasks);
    };
    return (
        <section className="selected__btn">
            <button className="btn__all btn__all--complete" onClick={() => handleComplete()}>Complete</button>
            <button className="btn__all btn__all--delete" onClick={() => handleDelete()}>Delete</button>
        </section>
    )
};

export { ToDoButtons };