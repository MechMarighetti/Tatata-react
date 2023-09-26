import React, {useState} from 'react';
import './ToDoForm.css';


const ToDoForm = ({onSubmitted = (form) => {} }) => {
    const [form, setForm] = useState({
        id: null,
        title: "",
        isChecked: false,
        isCompleted: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
        ...form,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitted({...form, id: window.crypto.randomUUID()});
        setForm({
            id: null,
            title: "",
            isChecked: false,
            isCompleted: false
        });
    };

    return (
        <section>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <input className="form__input" placeholder="Agrega una nueva tarea..." autoComplete="off" type="text" name="title" id="title" onChange={handleChange} value={form.title}/>
                <button className="form__btn" type="submit">+</button>
            </form>
        </section>
    )
};

export { ToDoForm };