import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ id, title, isChecked, isCompleted}) => {
    return (
        <div className="list__item">
            <input className="item__checkbox" type="checkbox" name={title} id={id} checked={isChecked}  /* onChange={() => handleCheckbox(id)} */ />
            <li className={isCompleted ? "item__text completed" : "item__text"}>{title}</li>
            {/* <div className="btn__section">
                <button className="item__btn item__btn--complete" onClick={() => console.log("Agregar funcion para completar este item")}>&#10004;</button>
                <button className="item__btn item__btn--edit" onClick={() => handleEdit(title)}>&#9998;</button>
                <button className="item__btn item__btn--delete" onClick={() => handleDelete(id)}>&#10006;</button>
            </div> */}
        </div>      
    )
};

export { ToDoItem };