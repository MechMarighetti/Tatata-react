import React, { useState } from 'react';
import { ToDoTitle } from '../ToDoTitle/ToDoTitle';
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoForm } from '../ToDoForm/ToDoForm';
import { ToDoButtons } from '../ToDoButtons/ToDoButtons';
import './Todo.css'

const ToDo = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        // Comprobando si la nueva tarea ya esta incluida en la lista de tareas (igualando ambos string a lower case y eliminando todos los espacios)
        const hasTask = tasks.find(task => task.title.toLowerCase().replace(/ /g, "") === newTask.title.toLowerCase().replace(/ /g, ""));
        // Si la nueva tarea esta repetida enviamos una alerta (cambiar a un mensaje personalizado); sino, se encarga de actualizar la lista con la nueva tarea
        hasTask ? alert("Esta repetida") : setTasks([...tasks, newTask]);
    };
    
    // Actualiza el estado de tareas  al eliminar una tarea
    const deleteTask = (newTasks) => {
        setTasks(newTasks);
    };

    // Actualiza el estado de tareas al cambiar a "completado" una tarea
    const completeTask = (newTasks) => {
        setTasks(newTasks);
    };
    
    // Actualiza el estado de tareas al editar el titulo de una tarea
    const editTask = (newTasks) => {
        setTasks(newTasks);
    };

    // Actualiza el estado de tareas al hacer click en el checkbox de una tarea
    const checkboxTask = (newTasks) => {
        setTasks(newTasks);
    };
    
/* 
    // Funcion para actualizar a completada un grupo de tareas
    const completeSelection = () => {
        const newTasks = [...tasks];
        // Filtro tareas seleccionadas
        const tasksSelected = tasks.filter(task => task.isChecked === true);
        // Hago un map para conseguir el id de cada tarea seleccionada
        const tasksID = tasksSelected.map(task => newTasks.indexOf(task));
        // Cambio a "true" la propiedad isCompleted de las tareas seleccionadas en la copia de la lista de tareas
        tasksID.forEach(id => newTasks[id].isCompleted = true);
        setTasks(newTasks);
    }; */

    return (
        <div className='todoApp'>
            <ToDoTitle>To Do List - Tarea Grupal #1</ToDoTitle>
            <ToDoForm  onSubmitted={(newTask) => addTask(newTask)}/>
            <ToDoList>
                {tasks.map(task => <ToDoItem key={task.id} id={task.id} title={task.title} isChecked={task.isChecked} isCompleted={task.isCompleted} tasks={tasks} onDelete={(data) => deleteTask(data)} onComplete={(data) => completeTask(data)} onEdit={(data) => editTask(data)} onChecked={(data) => checkboxTask(data)} />)}
            </ToDoList>
            <ToDoButtons /* deleteSelection={deleteSelection} completeSelection={completeSelection} *//>
        </div>
    )
};

export { ToDo };