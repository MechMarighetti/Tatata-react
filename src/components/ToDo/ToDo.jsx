import React, { useState } from 'react';
import { ToDoTitle } from '../ToDoTitle/ToDoTitle';
import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ToDoForm } from '../ToDoForm/ToDoForm';
import { ToDoButtons } from '../ToDoButtons/ToDoButtons';
import './Todo.css'

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    // Agrega una nueva tarea a la lista
    const addTask = (newTask) => {
        // Comprobando si la nueva tarea ya esta incluida en la lista de tareas (igualando ambos string a lower case y eliminando todos los espacios)
        const hasTask = tasks.find(task => task.title.toLowerCase().replace(/ /g, "") === newTask.title.toLowerCase().replace(/ /g, ""));
        // Si la nueva tarea esta repetida enviamos una alerta (cambiar a un mensaje personalizado); sino, se encarga de actualizar la lista con la nueva tarea
        hasTask ? alert("Esta repetida") : setTasks([...tasks, newTask]);
    };
    // Actualiza el listado de tareas  al eliminar una tarea
    const deleteTask = (newTasks) => {
        setTasks(newTasks);
    };
    // Actualiza el listado de tareas al cambiar a "completado" una tarea
    const completeTask = (newTasks) => {
        setTasks(newTasks);
    };
    // Actualiza el listado de tareas al editar el titulo de una tarea
    const editTask = (newTasks) => {
        setTasks(newTasks);
    };
    // Actualiza el listado de tareas al hacer click en el checkbox de una tarea
    const checkboxTask = (newTasks) => {
        setTasks(newTasks);
    };
    // Actualiza el listado de tareas cambiando a "completadas" un grupo de tareas seleccionadas
    const completeSelection = (newTask) => {
        setTasks(newTask);
    };
    // Actualiza el listado de tareas eliminando un grupo de tareas seleccionadas
    const deleteSelection = (newTasks) => {
        setTasks(newTasks);
    };
    return (
        <div className='todoApp'>
            <ToDoTitle>To Do List - Tarea Grupal #1</ToDoTitle>
            <ToDoForm  onSubmitted={(newTask) => addTask(newTask)}/>
            <ToDoList
                tasks={tasks}
                renderTask={(task) => (
                    <ToDoItem key={task.id} id={task.id} title={task.title} isChecked={task.isChecked} isCompleted={task.isCompleted} tasks={tasks} onChecked={(data) => checkboxTask(data)} onCompleted={(data) => completeTask(data)} onEdited={(data) => editTask(data)} onDeleted={(data) => deleteTask(data)} />
                )}
            />
            <ToDoButtons tasks={tasks} onCompleted={(data) => completeSelection(data)} onDeleted={(data) => deleteSelection(data)} />
        </div>
    )
};

export { ToDo };