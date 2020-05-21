import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Sample',
          id: 12345,
          completed: true,
        },
      ]
    }
  }
  addTodo = todoName => {
    
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos:[...this.state.todos, newTodo]
    })
  }

  //Toggle the completed status of a todo
  toggleTodo = todoId => {
    let toUpdate, toUpdateIndex
    this.state.todos.find((currentTodo, index) => {
      if(currentTodo.id == todoId) {
        toUpdate = currentTodo
        toUpdateIndex = index

      }})
    //Toggle completed
    toUpdate.completed = !toUpdate.completed
    let newList = [...this.state.todos]
    newList[toUpdateIndex] = toUpdate
    //Save to state
    this.setState({
      todos: newList
    })
  }

  //Remove Completed tasks
  clearTodos = () => {
    //filter the todos with completed true
    const filtered = this.state.todos.filter(currentTodo => currentTodo.completed === false)
    //set returned values to state
    this.setState({todos: filtered})
  }

  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        <TodoForm addTodo={this.addTodo} clearTodos={this.clearTodos} />
      </div>
    );
  }
}

export default App;
