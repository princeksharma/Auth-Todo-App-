import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit, markComplete,getStyle } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item => {
                    return (
                        <TodoItem 
                            key={item.id} 
                            completed={item.completed}
                            title={item.title} 
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                            markComplete={()=>markComplete(item.id)}
                            getStyle={getStyle}
                        />
                    )
                })}
                <button 
                    type="button" 
                    className="btn btn-block btn-danger text-capitalize mt-5" 
                    onClick={clearList}
                >
                    clear list
                </button>
            </ul>
        )
    }
}

export default TodoList;
