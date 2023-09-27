import React, {useState, useRef } from 'react';
import './ToDoForm.css';

const ToDoForm = ({onSubmitted = (form) => {} }) => {
    const [form, setForm] = useState({});
    const taskRef = useRef({
        id: null,
        title: "",
        isChecked: false,
        isCompleted: false
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        taskRef.current.id = window.crypto.randomUUID();
        form.title && (taskRef.current.title = form.title);
        onSubmitted(taskRef.current);
        setForm({});
        taskRef.current = {
            id: null,
            title: "",
            isChecked: false,
            isCompleted: false
        };
    };
    return (
        <section>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <input className="form__input" placeholder="Agrega una nueva tarea..." autoComplete="off" type="text" name="title" id="title" onChange={handleChange} value={form.title ? form.title : ""}/>
                <button className="form__btn" type="submit">+</button>
            </form>
        </section>
    )
};

export { ToDoForm };