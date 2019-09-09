import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class TodoItem extends Component {

    // getStyle = () => {
    //     return {
    //       textDecoration: this.props.completed ? 'line-through' : 'none',
    //     }
    // }

    render() {
        const { title, handleDelete, handleEdit, markComplete,getStyle } = this.props;
        return (
            <div>
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <input type="checkbox" onChange={markComplete} />
                <h2 style={{getStyle}}>{title}</h2>
                <div className="todo-icon">
                    <span 
                        className="mx-2 text-success"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPen}/>
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        onClick={handleDelete}
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </span>
                </div>
            </li>
            </div>
        )
    }
}

export default TodoItem;
