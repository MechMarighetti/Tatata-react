import React from 'react';
import './ToDoButtons.css'

const ToDoButtons = ({ deleteSelection, completeSelection }) => {
    // Funcion para eliminar un grupo de tareas seleccionadas
    // const deleteSelection = () => {
    //     // Filtrando tareas que tengan el checkbox desactivado
    //     const remainingTasks = tasks.filter(task => task.isChecked == false);
    //     setTasks(remainingTasks);
    // };

    return (
        <section className="selected__btn">
            <button className="btn__all btn__all--complete" onClick={() => completeSelection()}>Complete</button>
            <button className="btn__all btn__all--delete" onClick={() => deleteSelection()}>Delete</button>
        </section>
    )
};

export { ToDoButtons };