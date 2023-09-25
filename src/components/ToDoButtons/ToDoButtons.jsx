import React from 'react';
import './ToDoButtons.css'

const ToDoButtons = ({ deleteSelection, completeSelection }) => {
    return (
        <section className="selected__btn">
            <button className="btn__all btn__all--complete" onClick={() => completeSelection()}>Complete</button>
            <button className="btn__all btn__all--delete" onClick={() => deleteSelection()}>Delete</button>
        </section>
    )
};

export { ToDoButtons };