import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid';

import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';

class Todo extends Component {
  constructor(props){
    super(props);

    this.state={
      items:[],
      id:uuid(),
      item:'',
      editItem: false,
      loggedIn: true,
      completed: false
    }
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      completed: this.state.completed
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item:'',
      id: uuid(),
      editItem: false,
      completed:false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems,
    }); 
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id:id
    });


  };
	
  markComplete = id => {
    const selectedItem = this.state.items.find(item => item.id === id);
    if(selectedItem){ 
      this.setState({
      completed:true
    });
   }
  };
  
  getStyle = () => {
    return {
      textDecoration: this.state.completed ? 'line-through' : 'none',
    }
}

  render() {
    const { item, items, completed, editItem} =  this.state;
    console.log(this.state.loggedIn);
    if(this.state.loggedIn === false){
      return <Redirect to="/" />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput 
              item={item}
              completed={completed}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} 
              editItem={editItem}
            />
            <TodoList 
              items={items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              markComplete={this.markComplete}
              getStyle={this.getStyle}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Todo;
