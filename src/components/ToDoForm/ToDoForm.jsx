import React, {useState} from 'react';
import './ToDoForm.css';


const ToDoForm = ({onSubmitted = (form) => {} }) => {
    const [form, setForm] = useState({
        id: null,
        title: "",
        /* isChecked: false, */
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
        // Comprobando si la nueva tarea ya esta incluida en la lista de tareas (igualando ambos string a lower case y eliminando todos los espacios)
        /* const hasTask = tasks.find(task => task.title.toLowerCase().replace(/ /g, "") == form.title.toLowerCase().replace(/ /g, ""));
        // Si la nueva tarea esta repetida enviamos una alerta (cambiar a un mensaje personalizado); sino, se encarga de actualizar la lista con la nueva tarea
        hasTask ? alert("Esta repetida") : setTasks([...tasks, {...form, id: window.crypto.randomUUID()}]); */
        
        onSubmitted(form);

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