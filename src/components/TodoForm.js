import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: '',
        }
    }

    handleChange = e => {
        this.setState({todo: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
        this.setState({todo: ''})
    }

    // handleClear = e => {
    //     e.preventDefault()
    //     this.props.clearTodos()
    // }
    
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text' 
                name='todo' 
                value={this.state.todo}
                onChange={this.handleChange}
                placeholder="Add Task Name"
                 />
                <button name='submit'>Add Item</button>
                <button name='clear' onClick={this.props.clearTodos}>Clear Completed Items</button>
            </form>
        )    
    }
}
export default TodoForm