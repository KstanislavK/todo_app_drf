import React from 'react';

const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.project}</td>
            <td>{todo.createdAt}</td>
            <td>{todo.author}</td>
            <td>{todo.text}</td>
            <td>{todo.isActive}</td>
        </tr>
    )
}

const TodoList = ({todos}) => {
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
                {todos.map((todo) => <TodoItem todo={todo} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
