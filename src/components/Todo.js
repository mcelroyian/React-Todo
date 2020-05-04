import React from 'react'

const Todo = props => {
    return (
        <div onClick={e => props.toggleTodo(e.target.id)} className={props.todo.completed ? 'completed' : ''}>
            <p id={props.todo.id}>{props.todo.task}</p>
        </div>
    )
}
export default Todo