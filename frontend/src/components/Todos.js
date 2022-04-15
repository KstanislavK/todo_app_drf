import React from 'react';
import {Link} from "react-router-dom";

const TodoItem = ({todo,deleteTodo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.project}</td>
            <td>{todo.createdat}</td>
            <td>{todo.author}</td>
            <td>{todo.text}</td>
            <td>{todo.isActive}</td>
            <td><button onClick={()=>deleteTodo(todo.id)} type='button'>Delete</button></td>
        </tr>
    )
}

const TodoList = ({todos,deleteTodo}) => {
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">project</th>
                    <th scope="col">created</th>
                    <th scope="col">author</th>
                    <th scope="col">text</th>
                    <th scope="col">is_active</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo}/>)}
                </tbody>
            </table>
            <Link to='/todos/create'>Create</Link>
        </div>
    )
}

export default TodoList
